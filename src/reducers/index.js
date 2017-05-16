import {
  LOAD_CARDS,
  ADD_CARD,
  DELETE_CARD,
  MOVE_CARD
} from '../actions';

const initialState = {
  cards : []
};
const cards = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS: {
      return Object.assign({}, state, {cards: action.cards});
    }
    case ADD_CARD: {
      return Object.assign({}, state, {cards: [action.card].concat(state.cards)});
    }
    case DELETE_CARD: {
      return Object.assign({}, state, {cards: action.cards});
    }
    case MOVE_CARD: {
      return Object.assign({}, state, {cards: [action.card].concat(state.cards)});
    }
    default: {
      return state;
    }
  }
};

export default cards;