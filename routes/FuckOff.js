const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../model/FuckOff');
const bodyParser = require('body-parser');

//MainList
router.get('/', async (req,res)=>{
    let todos = await Todo.find()
    res.render('fuckoff',{todos: todos})
});

router.post('/todos', async (req,res)=>{
    if(!req.body.todo) return res.status('400').render('400')
    let newTodos = new Todo({
        todo: req.body.todo,
        done: 0
    })
    await newTodos.save()
    res.redirect("/This_can_piss_off/")
});
router.get("/todos/:id/done", async (req,res)=>{
    let todoId = req.params.id;
    Todo.findById(todoId)
    .exec().then(async function(result){
        result.done = !result.done;
       return result.save();
    }).then(function(result){
        res.redirect('/This_can_piss_off/')
    });
})
router.get('/delete/:id', (req,res)=>{
    let toDlete = req.params.id;
    Todo.findByIdAndDelete(toDlete)
    .then(console.log("deleted "+ toDlete))
    .then(res.redirect('/This_can_piss_off/'))
})

module.exports = router