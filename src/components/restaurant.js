import React, { useMemo, useState } from 'react';
import Menu from './menu';
import Review from './reviews';
import Rate from './rate';

function Restaurant({ restaurant }) {
  const { reviews, name, menu } = restaurant;
  let average = 0;

  return (
    <div>
      <h1>{name}</h1>
      {reviews.map((review) => {
        average = (average + review.rating) / reviews.length;
      })}
      <Rate rate={average} />
      <Menu menu={menu} />
      {reviews.map((review) =>
        review ? <Review key={review.id} review={review} /> : false
      )}
    </div>
  );
}

export default Restaurant;
