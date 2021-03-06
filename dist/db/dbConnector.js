"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListModel = void 0;
require("dotenv").config();
const mongoose = require("mongoose");
const { environment } = require("../config/config");
const { todoListSchema } = require("./schema");
const env = process.env.NODE_ENV || "development";
/**
 * Mongoose Connection
 **/
mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", () => {
    console.error("Error while connecting to DB");
});
const TodoListModel = mongoose.model("TodoList", todoListSchema);
exports.TodoListModel = TodoListModel;
//# sourceMappingURL=dbConnector.js.map