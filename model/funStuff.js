const mongoose = require('mongoose');

const FuntodoSchema = new mongoose.Schema({
    todo: {type: String, required: true},
    done: {type: Boolean, required: true},
    createdAt: {type: Date, default: Date.now()}
})
module.exports = mongoose.model("funTodo", FuntodoSchema);