/*jshint: esverion:6*/
const reactContainer = document.getElementById("root");

// For Testing and Initialization purposes
/*postUser(JSON.stringify({
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

ReactDOM.render(
  // component to render
  <App />,

  // where to inject this component
  // dom element, or use getElementById
  reactContainer
);