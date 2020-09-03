import React, { useMemo, useState } from 'react';
import Menu from './menu';
import Review from './reviews';
import Rate from './rate';

function Restaurant({ restaurant }) {
  const { reviews, name, menu } = restaurant;
  // const [sumRate, setSumRate] = useState(0);
  //   const average2 = useMemo(
  //       () => reviews.map(review => {
  //           setSumRate(sumRate => sumRate + review.rating)
  //           debugger
  //       }),
  //       [sumRate, reviews]
  //   );
  let average = 0;
  debugger;
  return (
    <div>
      <h1>{name}</h1>
      {reviews.map((review) => {
        average = (average + review.rating) / reviews.length;
      })}
      {/*<Rate rate={average2}/>*/}

      <Rate rate={average} />
      <Menu menu={menu} />
      {reviews.map((review) =>
        review ? <Review key={review.id} review={review} /> : false
      )}
    </div>
  );
}

export default Restaurant;
