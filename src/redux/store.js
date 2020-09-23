import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import reducer from './reducer';
import logger from './middleware/logger';
import generateId from './middleware/generateId';
import api from './middleware/api';
import history from '../history';

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  api,
  generateId,
  logger
);

export default createStore(reducer, composeWithDevTools(enhancer));
