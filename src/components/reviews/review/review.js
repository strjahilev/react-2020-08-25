import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';

const Review = ({ reviews, review }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {reviews[review].user}
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

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect(mapStateToProps, undefined)(Review);
