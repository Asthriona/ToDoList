const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../model/todo');
const bodyParser = require('body-parser');

router.get('/', async (req,res)=>{
    let todos = await Todo.find().sort({
        createdAt: 'desc'
    });
    res.render('index',{todos: todos})
});

router.post('/todos', async (req,res)=>{
    if(!req.body.todo) return res.status('400').render('400')
    let newTodos = new Todo({
        todo: req.body.todo,
        done: 0
    })
    await newTodos.save()
    res.redirect("/")
})

module.exports = router