const reactContainer = document.getElementById("root");

// For Testing and Initialization purposes
//postUser('username=Souzooka&password=ok');
//postTask('title=CSS&status=0&priority=0&created_by=1&assigned_to=1');
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