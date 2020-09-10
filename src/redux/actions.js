import { INCREMENT, DECREMENT, DESCRIBE, GETREST } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const describe = (id, name, price, restaurant, restaurantId) => ({
  type: DESCRIBE,
  payload: { id, name, price, restaurant, restaurantId },
});
export const getrest = (id, name) => ({ type: GETREST, payload: { id, name } });
