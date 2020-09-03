import React from 'react';
import Rate from './rate';

function Review({ review }) {
  const { user, text, rating } = review;

  return (
    <div>
      <h2>Review</h2>
      <p>Посетитель: {user}</p>
      <p>Отзыв: {text}</p>
      <Rate rate={rating} />
    </div>
  );
}

export default Review;
