const CARD_STATUS = ['Low', 'Medium', 'High', 'Blocking'];

window.Card = class Card extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      priority: props.priority
    };
  }

  getStatusText() {
    return CARD_STATUS[this.state.priority];
  }

  render() {
    return (
      <div className="card">
        <p></p>
      </div>
    )
  }
}