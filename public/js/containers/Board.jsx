window.Board = class Board extends React.Component {

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

  render() {
    return (
      <div>
        <Header />
        <div id="board-container">
          <div id="board-queue">
            <List status={0} cards={this.state.cards.filter( (card) => card.status === 0 )} />
          </div>
          <div id="board-progress">
            <List status={1} cards={this.state.cards.filter( (card) => card.status === 1 )} />
          </div>
          <div id="board-done">
            <List status={2} cards={this.state.cards.filter( (card) => card.status === 2 )} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}