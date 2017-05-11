/*jshint esversion:6*/
const express = require('express');
const Tasks = express.Router();
const { Task, User } = require('../../models');

Tasks.get('/', (req, res) => {
  Task.all({
    include: [
      {
        model: User,
        as: 'Creator'
      },
      {
        model: User,
        as: 'Assignee'
      }
    ]
  })
  .then( (tasks) => {
    res.json(tasks);
  });
});

Tasks.get('/:id', (req, res) => {
  Task.find({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
      }
    ]
  })
  .then( (task) => {
    res.json(task);
  });
});

Tasks.post('/', (req, res) => {
  Task.create({
    title: req.body.title,
    status: parseInt(req.body.status),
    priority: parseInt(req.body.priority),
    created_by: req.body.created_by,
    assigned_to: req.body.assigned_to
  })
  .then( (task) => {
    res.json(task);
  })
  .catch( (err) => {
    res.json(err);
  });
});

Tasks.put('/:id', (req, res) => {
  Task.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.id,
    }
  })
  .then( (task) => {
    return Task.find( {
      where: {
        id: req.params.id
      }
    });
  })
  .then( (task) => {
    res.json(task);
  })
  .catch( (err) => {
    res.json(err);
  });
});

module.exports = Tasks;