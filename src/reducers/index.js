import {combineReducers} from 'redux';
import BookReducer from './book-reducer';
import ActiveBookReducer from './active-book-reducer';

const rootReducer = combineReducers ({
  books: BookReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;