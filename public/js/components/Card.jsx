window.Card = class Card extends React.Component {

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