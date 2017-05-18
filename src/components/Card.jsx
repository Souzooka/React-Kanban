import React from 'react';
const CARD_STATUS = ['Low', 'Medium', 'High', 'Blocking'];

const Card = (props) => (
  <div className="card">
    <hr/>
    <p>Task: {props.card.title}</p>
    <p>Priority: {CARD_STATUS[props.card.priority]}</p>
    <p>Created by: {props.card.Creator.username}</p>
    <p>Assigned to: {props.card.Assignee.username}</p>
    <button onclick="putCard(card, 'up')">Move Up</button>
    <button onclick="putCard(card, 'down')">Move Down</button>
    <button onclick="putCard(card)">Delete</button>
    <button onclick="putCard(card, 'prority')">Change priority</button>
  </div>
);

export default Card;