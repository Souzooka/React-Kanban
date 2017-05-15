export const LOAD_BOOKS = 'LOAD_BOOKS';

export const loadBooks = books => {
  return {
    type: LOAD_BOOKS,
    books
  };
};
