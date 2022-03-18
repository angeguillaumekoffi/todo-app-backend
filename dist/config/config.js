"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = exports.NODE_PORT = exports.MONGO_PORT = void 0;
require("dotenv").config();
exports.MONGO_PORT = process.env.MONGO_PORT || 27017;
exports.NODE_PORT = process.env.NODE_PORT || 4000;
exports.environment = {
    development: {
        serverURL: `http://localhost:${exports.NODE_PORT}/`,
        dbString: `mongodb://localhost:${exports.MONGO_PORT}/todolist_api`,
    },
    production: {
        serverURL: `http://localhost:${exports.NODE_PORT}/`,
        dbString: `mongodb://mongo:${exports.MONGO_PORT}/todolist_api`,
    },
};
//# sourceMappingURL=config.js.map