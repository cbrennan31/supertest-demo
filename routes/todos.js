const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

/* GET users listing. */
router.get('/', (req, res) => {
  Todo.findAll().then(todos => res.status(200).json(todos));
});

module.exports = router;
