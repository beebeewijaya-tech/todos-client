import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(user: { email: $email, password: $password }) {
      token
    }
  }
`;

const REGISTER_USER = gql`
  mutation registerUser(
    $fullname: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      user: { email: $email, password: $password, fullname: $fullname }
    ) {
      id
    }
  }
`;

const UPDATE_IS_COMPLETE = gql`
  mutation updateTodo($id: ID!, $text: String!, $isCompleted: Boolean!) {
    updateTodo(id: $id, todo: { text: $text, isCompleted: $isCompleted }) {
      id
      isCompleted
    }
  }
`;

const INSERT_TODO = gql`
  mutation insertTodo($text: String!) {
    addTodo(todo: { text: $text, isCompleted: false }) {
      id
      text
      isCompleted
    }
  }
`;

const DELETE_COMPLETED_TODO = gql`
  mutation deleteCompleted {
    deleteCompletedTodo
  }
`;

export {
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_IS_COMPLETE,
  INSERT_TODO,
  DELETE_COMPLETED_TODO,
};
