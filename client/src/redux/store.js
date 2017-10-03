import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { isAuthenticated } from '../utils/user';
import initActions from './initActions';

const defaultState = {
  user: isAuthenticated() ? {} : null,
  businesses: {
    location: '',
    fetching: false,
    businesses: []
  },
  attendance: {}
};

const store = createStore(reducer, defaultState, applyMiddleware(thunk));

store.dispatch(initActions());

export default store;
