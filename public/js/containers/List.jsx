const LIST_STATUS = ['IN QUEUE', 'IN PROGRESS', 'DONE'];

window.List = class List extends React.Component {

  constructor(props){
    super(props);
    console.log(props.cards)

    this.state = {
      status: props.status,
      cards: props.cards.filter( (card) => card.status === this.status )
    };
  }

  getStatusText() {
    return LIST_STATUS[this.state.status];
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