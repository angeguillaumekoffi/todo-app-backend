const mongoose = require('mongoose');

export const todoListSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: { 
        type : Date, default: Date.now
    },
    updatedAt: { 
        type : Date, default: null 
    },
});
