const LIST_STATUS = ['IN QUEUE', 'IN PROGRESS', 'DONE'];

window.List = (props) => (

  <div className="cards-container">
  <h1>
  {LIST_STATUS[props.status]}
  </h1>
    <ul>
      {props.cards.map( (card, index) => {
        return <Card card={props.cards[index]}/>
      })}
      <hr/>
    </ul>
  </div>
)