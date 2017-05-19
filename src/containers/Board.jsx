import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCards, postCard, putCard, deleteCard } from '../api';
import { loadCards, addCard, destroyCard, editCard } from '../actions';
//import './styles.css';

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCards: cards => {
      dispatch(loadCards(cards))
    },
    addCard: card => {
      dispatch(addCard(card))
    },
    deleteCard: card => {
      dispatch(deleteCard(card))
    },
    putCard: card => {
      dispatch(putCard(card))
    }
  }
}

class Board extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    getCards().then( cards => {
      this.props.loadCards( cards );
    });
  }

  addCard = (card) => {
    postCard(card);
    this.props.addCard(card);
  }

  deleteCard = (card) => {
    deleteCard(card);
    this.props.addCard(card);
  }

  putCard = (card) => {
    putCard(card);
    this.props.addCard(card);
  }

  render() {
    return (
      <div>
        <Header />
        <div id="body-container">
          <div id="board-container">
            <div id="board-queue">
              <List status={0} cards={this.props.cards.filter( (card) => card.status === 0 )} />
            </div>
            <div id="board-progress">
              <List status={1} cards={this.props.cards.filter( (card) => card.status === 1 )} />
            </div>
            <div id="board-done">
              <List status={2} cards={this.props.cards.filter( (card) => card.status === 2 )} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}



const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;