import { DESCRIBE } from '../constants';

const initialState = {
  describes: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DESCRIBE:
      const arrayDescribes = state.describes.filter(
        (describe) => describe.id === payload.id
      );
      let newArray = [...state.describes];
      if (!arrayDescribes.length) {
        newArray.push({
          id: payload.id,
          name: payload.name,
          price: payload.price,
          nameRestaurant: payload.nameRestaurant,
          restaurantId: payload.restaurantId,
        });
      }

      return {
        ...state,
        describes: [...newArray],
      };

    default:
      return state;
  }
};
