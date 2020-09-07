import React from 'react';
import propTypes from 'prop-types';
import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="reviews">
      {reviews.map((review) => (
        <Review key={review.id} {...review} data-id="review" />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
