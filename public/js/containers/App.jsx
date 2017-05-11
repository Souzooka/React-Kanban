window.App = class App extends React.Component{

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