import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          rating: payload.rate,
          text: payload.text,
          userId: payload.userId,
        },
      };
    default:
      return reviews;
  }
};
