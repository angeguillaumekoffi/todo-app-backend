"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = exports.PORT = void 0;
exports.PORT = 4000;
exports.environment = {
    development: {
        serverURL: `http://localhost:${exports.PORT}/`,
        dbString: "mongodb://localhost:27017/todolist_api",
    },
    production: {
        serverURL: `http://localhost:${exports.PORT}/`,
        dbString: "mongodb://localhost:27017/todolist_api",
    },
};
//# sourceMappingURL=config.js.map