const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../model/funStuff');
const bodyParser = require('body-parser');

//MainList
router.get('/', async (req,res)=>{
    let todos = await Todo.find()
    res.render('FunList',{todos: todos})
});

router.post('/todos', async (req,res)=>{
    console.log('Fun!')
    if(!req.body.todo) return res.status('400').render('400')
    let newTodos = new Todo({
        todo: req.body.todo,
        done: 0
    })
    await newTodos.save()
    res.redirect("/Stuff_I_want_to_do_but_isnt_needed")
});
router.get("/todos/:id/done", async (req,res)=>{
    let todoId = req.params.id;
    Todo.findById(todoId)
    .exec().then(async function(result){
        result.done = !result.done;
       return result.save();
    }).then(function(result){
        res.redirect('/Stuff_I_want_to_do_but_isnt_needed')
    });
})
router.get('/delete/:id', (req,res)=>{
    let toDlete = req.params.id;
    Todo.findByIdAndDelete(toDlete)
    .then(console.log("deleted "+ toDlete))
    .then(res.redirect('/Stuff_I_want_to_do_but_isnt_needed'))
})

module.exports = router