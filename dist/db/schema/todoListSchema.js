"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoListSchema = void 0;
const mongoose = require('mongoose');
exports.todoListSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updatedAt: {
        type: Date, default: null
    },
});
//# sourceMappingURL=todoListSchema.js.map