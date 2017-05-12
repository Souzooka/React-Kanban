const LIST_STATUS = ['IN QUEUE', 'IN PROGRESS', 'DONE'];

window.List = class List extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      status: props.status,
      cards: []
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