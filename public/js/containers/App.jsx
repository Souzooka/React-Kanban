window.App = class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      cards: [],
    };

    this.addCard = this.addCard.bind(this);
  }

  componentWillMount() {
    getCards().then( cards => {
      this.setState({ cards });
    });
  }

  addCard(card) {
    this.setState( {cards: this.cards.push(card)} );
  }

  render(){
    return (
      <div>
        <Header />
        <Board cards={this.state.cards}/>
        <Footer />
      </div>
    );
  }
};