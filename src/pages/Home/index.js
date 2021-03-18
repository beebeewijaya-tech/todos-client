import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Card, Spinner } from "../../components";
import {
  DELETE_COMPLETED_TODO,
  INSERT_TODO,
  UPDATE_IS_COMPLETE,
} from "../../graphql/mutations";
import { GET_TODOS } from "../../graphql/queries";

function Home() {
  const [todo, setTodo] = useState("");

  const [updateIsCompleteMutation] = useMutation(UPDATE_IS_COMPLETE);
  const [insertTodoMutation] = useMutation(INSERT_TODO);
  const [deleteCompletedTodoMutation] = useMutation(DELETE_COMPLETED_TODO);

  const { loading, error, data } = useQuery(GET_TODOS);

  const updateCacheInsert = (cache, { addTodo }) => {
    const existingTodos = cache.readQuery({ query: GET_TODOS });
    const newTodos = existingTodos.getAllTodos.todos.concat(addTodo);
    const newTodosCount = newTodos.length;

    cache.writeQuery({
      query: GET_TODOS,
      data: {
        getAllTodos: {
          todos: newTodos,
          total: newTodosCount,
        },
      },
    });
  };

  const updateCacheDeleteAll = (cache) => {
    const existingTodos = cache.readQuery({ query: GET_TODOS });
    const newTodos = existingTodos.getAllTodos.todos.filter(
      (todo) => !todo.isCompleted
    );
    const newTodosCount = newTodos.length;

    cache.writeQuery({
      query: GET_TODOS,
      data: {
        getAllTodos: {
          todos: newTodos,
          total: newTodosCount,
        },
      },
    });
  };

  const changeIsComplete = (item) => {
    updateIsCompleteMutation({
      variables: {
        id: item.id,
        text: item.text,
        isCompleted: !item.isCompleted,
      },
    });
  };

  const insertTodo = (e) => {
    if (e.key === "Enter") {
      insertTodoMutation({
        variables: {
          text: todo,
        },
        update: (cache, { data }) => updateCacheInsert(cache, data),
      });
      setTodo("");
    }
  };

  const deleteCompletedTodo = () => {
    deleteCompletedTodoMutation({
      update: (cache) => updateCacheDeleteAll(cache),
    });
  };

  if (loading) return <Spinner />;
  return (
    <section className="bg-gray-100	flex min-h-screen items-center px-3">
      <section className="container mx-auto mb-10">
        <section className="w-1/2 mx-auto">
          <section className="w-full mb-5">
            <input
              className="bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 w-full mt-5 py-2 px-4 rounded shadow-lg"
              placeholder="Enter your todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={insertTodo}
            />
          </section>
          <section className="w-full">
            <section className="flex justify-between">
              <p className="text-primary text-left mb-5">
                Your Todo for today {new Date().toDateString()}
              </p>
              <p
                onClick={deleteCompletedTodo}
                className="text-primary text-right hover:underline mb-5 cursor-pointer"
              >
                Delete Completed Todo
              </p>
            </section>
            <Card list={data.getAllTodos.todos} onChange={changeIsComplete} />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Home;
