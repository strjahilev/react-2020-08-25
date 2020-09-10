import { combineReducers } from 'redux';
import orderReducer from './order';
import describeOrder from './describeOrder';

export default combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  describeOrder,
});
