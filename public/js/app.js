const reactContainer = document.getElementById("root");

const Header = (props) => (
  <div id="header">
    <h1>Kanban Board</h1>
  </div>
);

const Footer = (props) => (
  <div id="footer">
    <h1>Kanban Board</h1>
  </div>
);

class Board extends React.Component {

  constructor(props){
    super(props);

    // set the initial state
    this.state = {

    };

  }

  render() {
    return (
      <div id="board-container">
        <div id="board-queue">
          <List status={0} />
        </div>
        <div id="board-progress">
          <List status={1} />
        </div>
        <div id="board-done">
          <List status={2} />
        </div>
      </div>
    )
  }
}

class List extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      status: props.status,
      cards: []
    };
  }

  getStatusText() {
    return ['IN QUEUE', 'IN PROGRESS', 'DONE'][this.state.status];
  }

  render() {
    const cards = 'todo';
    return (
      <div className="cards-container">
        {cards}
      </div>
    )
  }
}

class Card extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      priority: props.priority
    };
  }

  getStatusText() {
    return ['Low', 'Medium', 'High', 'Blocking'][this.state.priority];
  }

  render() {
    return (
      <div className="card">
        <p></p>
      </div>
    )
  }
}

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      books : [],
      filter : ""
    };

  }

  componentWillMount() {

  }

  render(){
    return (
      <div>
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
};

ReactDOM.render(
  // component to render
  <App />,

  // where to inject this component
  // dom element, or use getElementById
  reactContainer
);