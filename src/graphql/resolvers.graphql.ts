import { TodoListModel } from "../db";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    getTodoList: (root: any) => {
      return new Promise((resolve, reject) => {
        TodoListModel.find((err: any, todolist: any[]) => {
          if (err) reject(err);
          else resolve(todolist);
        });
      });
    },
    
    findTodoItem: (root: any, todoItem: any) => {
      return new Promise((resolve, reject) => {
        TodoListModel.findOne({$or: [{ _id: todoItem.id}, {title: todoItem.title }]}, (err: any, todoItem: any) => {
          if (err) reject(err);
          else resolve(todoItem);
        });
      });
    }
  },
  
  Mutation: {
    addTodoItem: (root: any, { todoItemInput }) => {
      const { ...rest } = todoItemInput;
      const newTodo = new TodoListModel({ ...rest });

      return new Promise((resolve, reject) => {
        newTodo.save((err: any, todoItem: any) => {
          if (err) reject(err);
          else resolve(todoItem);
        });
      });
    },

    updateTodoItem: (root: any, { todoItemInput }) => {
      todoItemInput.updatedAt = new Date().getTime();

      return new Promise((resolve, reject) => {
        TodoListModel.updateOne({_id: todoItemInput.id}, {$set: todoItemInput}, (err: any, res: any) => {
          if (err) reject(err);
          resolve(res);
        });
      });
    },

    deleteTodoItem: (root: any, id: any) => {
      return new Promise((resolve, reject) => {
        TodoListModel.deleteOne({_id: id}, (err: any, res: any) => {
          if (err) reject(err);
          resolve(res);
        });
      });
    }
  },
};
