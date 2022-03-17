"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../db");
/**
 * GraphQL Resolvers
 **/
exports.resolvers = {
    Query: {
        getTodoList: (root) => {
            return new Promise((resolve, reject) => {
                db_1.TodoListModel.find((err, todolist) => {
                    if (err)
                        reject(err);
                    else
                        resolve(todolist);
                });
            });
        },
        findTodoItem: (root, todoItem) => {
            return new Promise((resolve, reject) => {
                db_1.TodoListModel.findOne({ $or: [{ _id: todoItem.id }, { title: todoItem.title }] }, (err, todoItem) => {
                    if (err)
                        reject(err);
                    else
                        resolve(todoItem);
                });
            });
        }
    },
    Mutation: {
        addTodoItem: (root, { todoItemInput }) => {
            const rest = __rest(todoItemInput, []);
            const newTodo = new db_1.TodoListModel(Object.assign({}, rest));
            return new Promise((resolve, reject) => {
                newTodo.save((err, todoItem) => {
                    if (err)
                        reject(err);
                    else
                        resolve(todoItem);
                });
            });
        },
        updateTodoItem: (root, { todoItemInput }) => {
            return new Promise((resolve, reject) => {
                db_1.TodoListModel.updateOne({ _id: todoItemInput.id }, { $set: todoItemInput }, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        },
        deleteTodoItem: (root, id) => {
            return new Promise((resolve, reject) => {
                db_1.TodoListModel.deleteOne({ _id: id }, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        }
    },
};
//# sourceMappingURL=resolvers.graphql.js.map