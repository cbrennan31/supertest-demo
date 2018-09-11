const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

/* GET users listing. */
router.get('/', (req, res) => {
  Todo.findAll().then(todos => res.status(200).json(todos));
});

router.post('/', (req, res) => {
  Todo.create({
    name: req.body.name,
    completed: req.body.completed
  }).then(todo => res.status(200).json(todo));
});

module.exports = router;
