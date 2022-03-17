"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
//# sourceMappingURL=schema.graphql.js.map