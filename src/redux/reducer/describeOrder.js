import { DESCRIBE, GETREST } from '../constants';

const initialState = {
  describes: [],
  rest: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DESCRIBE:
      return {
        ...state,
        describes: [
          ...state.describes,
          {
            id: payload.id,
            name: payload.name,
            price: payload.price,
            restaurant: payload.restaurant,
            restaurantId: payload.restaurantId,
          },
        ],
      };
    case GETREST:
      return {
        ...state,
        rest: [
          ...state.rest,
          {
            id: payload.id,
            name: payload.name,
          },
        ],
      };

    default:
      return state;
  }
};
