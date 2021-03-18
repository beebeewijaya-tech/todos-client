import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query getTodos {
    getAllTodos {
      todos {
        id
        text
        isCompleted
      }
      total
    }
  }
`;

export { GET_TODOS };
