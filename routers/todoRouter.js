const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTasks);
router.get('/:name', todoController.getTaskByName);

module.exports = router;
