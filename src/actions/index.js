/*jshint esversion: 6*/
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const MOVE_CARD = 'MOVE_CARD';

export const loadCards = cards => {
  return {
    type: LOAD_CARDS,
    cards
  };
};
export const addCard = card => {
  return {
    type: ADD_CARD,
    card
  };
};
export const destroyCard = card => {
  return {
    type: DELETE_CARD,
    card
  };
};
export const moveCard = card => {
  return {
    type: MOVE_CARD,
    card
  };
};