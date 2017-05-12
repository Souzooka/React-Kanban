const CARD_STATUS = ['Low', 'Medium', 'High', 'Blocking'];

window.Card = (props) => (
  <div className="card">
    <hr/>
    <p>Task: {props.card.title}</p>
    <p>Priority: {CARD_STATUS[props.card.priority]}</p>
    <p>Created by: {props.card.Creator.username}</p>
    <p>Assigned to: {props.card.Assignee.username}</p>
  </div>
);