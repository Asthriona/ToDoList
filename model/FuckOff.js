const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {type: String, required: true},
    done: {type: Boolean, required: true},
    createdAt: {type: Date, default: Date.now()}
})
module.exports = mongoose.model("FuckOffTodo", todoSchema);