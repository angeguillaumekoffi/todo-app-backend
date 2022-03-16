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
                db_1.todoList.find((err, todolist) => {
                    if (err)
                        reject(err);
                    else
                        resolve(todolist);
                });
            });
        },
        findATodo: (root, todo) => {
            return new Promise((resolve, reject) => {
                db_1.todoList.findOne({ _id: todo.id }, (err, todo) => {
                    if (err)
                        reject(err);
                    else
                        resolve(todo);
                });
            });
        }
    },
    Mutation: {
        addTodo: (root, { todolist }) => {
            const rest = __rest(todolist, []);
            const newTodo = new db_1.todoList(Object.assign({}, rest));
            return new Promise((resolve, reject) => {
                newTodo.save((err, todolist) => {
                    if (err)
                        reject(err);
                    else
                        resolve(todolist);
                });
            });
        },
        updateTodo: (root, { todolist }) => {
            const rest = __rest(todolist, []);
            const newTodo = new todolist(Object.assign({}, rest));
            return new Promise((resolve, reject) => {
                newTodo.save((err, todo) => {
                    if (err)
                        reject(err);
                    resolve(todo);
                });
            });
        },
        deleteTodo: (root, todo) => {
            console.log(todo);
        }
    },
};
//# sourceMappingURL=resolvers.graphql.js.map