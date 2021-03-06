const express = require('express');
const router = express.Router();
const Todo = require("../models/todo-model");
const User = require("../models/user-model");

// GET ONE TODO BY ID 
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Todo
    .findById(id)
    .then(oneTodo => {
      res 
        .status(200)
        .json(oneTodo);
    })
    .catch(err => {
      res
        .status(400)
        .json(err);
    });
});

// CREATE A TODO
router.post('/', (req, res, next) => {
  const { name, description, createdTimestamp} = req.body;
  const id = req.session.currentUser._id
  Todo  
    .create({name, description, createdTimestamp})
    .then(newTodo => {
      res
        .status(201)
        .json(newTodo);
        User.findByIdAndUpdate(
          id,
          { $push: {todo: newTodo._id}},
          { new : true }
        )
        .then(response => {
          console.log('reponse', response);
        })
        .catch(err => {
          console.log('error', err);
        })
    })
    .catch(err => {
      res
        .status(500)
        .json(err);
    });
});

// UPDATE A TODO
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, description, solved, solvedTimestamp } = req.body;
  Todo
    .findByIdAndUpdate(id, {name, description, solved, solvedTimestamp})
    .then(updatedTodo => {
      res
        .status(200)
        .json(updatedTodo);
    })
    .catch(err => {
      res
        .status(501)
        .json(err)
    });  
});

// DELETE A TODO
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
    Todo
      .findByIdAndRemove(id)
      .then((data) => {
        res
          .status(202)
          .json(data);
        })
        .catch(err => {
          res
          .status(500)
          .json(err);
        });
});

module.exports = router;
