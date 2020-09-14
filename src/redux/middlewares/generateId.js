import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  action.payload.id = uuidv4();
  action.payload.userId = uuidv4();
  action.payload.restId = action.restId;
  next(action);
};
