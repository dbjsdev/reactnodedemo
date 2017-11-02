import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/newsReducer';
import authReducer from '../reducers/authReducer';

const store = createStore(
  combineReducers({
    news: newsReducer,
    auth: authReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;