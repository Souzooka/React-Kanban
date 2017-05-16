/*jshint: esverion:6*/
const reactContainer = document.getElementById("root");
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import kanbanReducers from './reducers';
import Board from './containers/Board';
import './index.css';

// For Testing and Initialization purposes
/*import {postUser, postCard} from './api/';
postUser(JSON.stringify({
  username: 'Souzooka',
  password: 'ok'
}))
.then( (user) => {
  console.log(user);

  postCard(JSON.stringify({
    title: 'Make some more CSS',
    status: 0,
    priority: 1,
    created_by: 1,
    assigned_to: 1
  }))
  .then( (card) => {
    console.log(card);
  });

  postCard(JSON.stringify({
    title: 'Make some more CSS',
    status: 0,
    priority: 3,
    created_by: 1,
    assigned_to: 1
  }))
  .then( (card) => {
    console.log(card);
  });

  postCard(JSON.stringify({
    title: 'Make some more CSS',
    status: 1,
    priority: 2,
    created_by: 1,
    assigned_to: 1
  }))
  .then( (card) => {
    console.log(card);
  });

  postCard(JSON.stringify({
    title: 'Make some more CSS',
    status: 2,
    priority: 1,
    created_by: 1,
    assigned_to: 1
  }))
  .then( (card) => {
    console.log(card);
  });

  postCard(JSON.stringify({
    title: 'Make some more CSS',
    status: 2,
    priority: 0,
    created_by: 1,
    assigned_to: 1
  }))
  .then( (card) => {
    console.log(card);
  });
});*/
// end

const store = createStore(
  kanbanReducers
);

ReactDOM.render(
  // component to render
  <Provider store={store}>
    <Board />
  </Provider>,

  // where to inject this component
  // dom element, or use getElementById
  reactContainer
);