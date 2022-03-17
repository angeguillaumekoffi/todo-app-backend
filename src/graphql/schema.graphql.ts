import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type TodoList {
    id: ID
    title: String
    description: String
    createdAt: Float
    updatedAt: Float
  }
  
  input TodoListInput {
    title: String
    description: String
    createdAt: Float
    updatedAt: Float
  }
  
  type Query {
    getTodoList: [TodoList]
    findATodo(id: String, title: String): TodoList
  }
  
  type Mutation {
    addTodo(todolist: TodoListInput): TodoList
    updateTodo(todolist: TodoListInput): TodoList
    deleteTodo(id: String): TodoList
  }
`;