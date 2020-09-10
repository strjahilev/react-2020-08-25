import { INCREMENT, DECREMENT, DESCRIBE } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const describe = (id, name, price, nameRestaurant, restaurantId) => {
  return {
    type: DESCRIBE,
    payload: { id, name, price, nameRestaurant, restaurantId },
  };
};
