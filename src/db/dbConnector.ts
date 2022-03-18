const mongoose = require("mongoose");
const { environment } = require("../config/config");
const { todoListSchema } = require("./schema");
const env = "production";

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

export { TodoListModel };
