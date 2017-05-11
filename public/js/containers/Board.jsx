window.Board = class Board extends React.Component {

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