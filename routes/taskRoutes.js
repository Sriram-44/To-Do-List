const express = require('express');
const router = express.Router();
const sequelize = require('../models/index');

// Add Task
router.post('/add', async (req, res) => {
    const { description } = req.body;
    await sequelize.models.Task.create({ description });
    res.redirect('/');
});

// Toggle Task Completion
router.post('/toggle/:id', async (req, res) => {
    const task = await sequelize.models.Task.findByPk(req.params.id);
    task.completed = !task.completed;
    await task.save();
    res.redirect('/');
});

// Delete Task
router.post('/delete/:id', async (req, res) => {
    await sequelize.models.Task.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/');
});

module.exports = router;
