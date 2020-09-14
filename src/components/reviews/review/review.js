import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';

const Review = ({ reviews, review, users }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {users[reviews[review].userId].name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {reviews[review].text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={reviews[review].rating} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    users: state.users,
  };
};

Review.propTypes = {
  reviews: PropTypes.objectOf(
    PropTypes.shape({
      userId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  review: PropTypes.string.isRequired,
  users: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

Review.defaultProps = {
  name: 'Anonymous',
};

export default connect(mapStateToProps, undefined)(Review);
