/*jshint esversion:6*/
const express = require('express');
const Tasks = express.Router();
const { Task, User } = require('../../models');

Tasks.get('/', (req, res) => {
  Task.all({
    include: [
      {
        model: User,
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
    created_by: req.body.created_by,
    name: req.body.name,
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