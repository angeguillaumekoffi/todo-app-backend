import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type TodoItem {
    id: ID
    title: String
    description: String
    createdAt: Float
    updatedAt: Float
  }
  
  input addTodoItemInput {
    title: String
    description: String
  }

  input updateTodoItemInput {
    id: ID!
    title: String!
    description: String!
    updatedAt: Float
  }
  
  type Query {
    getTodoList: [TodoItem]
    findTodoItem(id: String, title: String): TodoItem
  }
  
  type Mutation {
    addTodoItem(todoItemInput: addTodoItemInput): TodoItem
    updateTodoItem(todoItemInput: updateTodoItemInput): TodoItem
    deleteTodoItem(id: String): String
  }
`;