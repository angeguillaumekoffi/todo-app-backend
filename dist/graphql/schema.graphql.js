"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
    createdAt: Float
    updatedAt: Float
  }

  input updateTodoItemInput {
    id: ID!
    title: String
    description: String
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
//# sourceMappingURL=schema.graphql.js.map