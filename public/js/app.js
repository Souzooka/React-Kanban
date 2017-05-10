const reactContainer = document.getElementById("root");

const Header = (props) => (
  <div id ="header">
    <h1>Kanban Board</h1>
  </div>
);

const Footer = (props) => (
  <div id ="footer">
    <h1>Kanban Board</h1>
  </div>
);

/*class Board extends React.Component {


  constructor(props){
    super(props);

    // set the initial state
    this.state = {

    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
    )
  }
}*/

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