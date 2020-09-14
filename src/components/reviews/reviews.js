import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';
import { connect } from 'react-redux';

const Reviews = ({ reviewsId, restId }) => {
  return (
    <div className={styles.reviews}>
      {reviewsId.map((review) => (
        <Review key={review} review={review} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    reviewsId: ownProps.reviews,
  };
};

Reviews.propTypes = {
  reviewsId: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, undefined)(Reviews);
