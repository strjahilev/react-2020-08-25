import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { ADDREVIEW } from '../constants';

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      let idx = 0;
      restaurants.forEach((restaurant, index) => {
        if (restaurant.id === payload.restId) {
          idx = index;
        }
      });

      return {
        ...restaurants,
        [idx]: {
          ...restaurants[idx],
          reviews: [...restaurants[idx].reviews, payload.id],
        },
      };
    default:
      return restaurants;
  }
};
