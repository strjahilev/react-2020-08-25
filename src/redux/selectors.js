import { createSelector } from 'reselect';
import { getAverage, getById, mapToArray } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const restaurantsListSelector = mapToArray(restaurantsSelector);
export const productsListSelector = productsSelector;
export const productAmountSelector = getById(orderSelector, 0);
// export const productSelector = getById(productsSelector);

const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id].rating);
    return Math.round(getAverage(ratings));
  }
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => {
        return order[productId] > 0;
      })
      .map((productId) => {
        return {
          product: products.filter((product) => {
            if (product.id === productId) return product;
          })[0],
          amount: order[productId],
          subtotal:
            order[productId] *
            products.filter((product) => {
              if (product.id === productId) return product;
            })[0].price,
        };
      });
    // .map((product) => {debugger
    //  return  {
    //     product,
    //       amount: order[product.id],
    //     subtotal: order[product.id] * product.price,
    //   }
    // });
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
