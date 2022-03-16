import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type TodoList {
    id: ID
    title: String
    description: String
    gender: Gender
    createdAt: Int
    updatedAt: Int
  }
  
  input TodoListInput {
    title: String
    description: String
    gender: Gender
    createdAt: Int
    updatedAt: Int
  }
  
  type Query {
    getTodoList: [TodoList]
    findATodo(id: String): TodoList
  }
  
  type Mutation {
    addTodo(todolist: TodoListInput): TodoList
    updateTodo(todolist: TodoListInput): TodoList
    deleteTodo(id: String): TodoList
  }
`;