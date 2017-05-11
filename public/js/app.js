const reactContainer = document.getElementById("root");

// For Testing and Initialization purposes
postUser(JSON.stringify({
  username: 'Souzooka',
  password: 'ok'
}))
.then( (user) => {
  console.log(user);
});
getUsers()
.then( (users) => {
  console.log(users);
});

// end

ReactDOM.render(
  // component to render
  <App />,

  // where to inject this component
  // dom element, or use getElementById
  reactContainer
);