import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { Route, Switch, Link } from 'react-router-dom';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Link to={`/restaurants/${id}/menu`}> Menu </Link>
      <Link to={`/restaurants/${id}/reviews`}> Reviews </Link>
      <Switch>
        <Route
          path="/restaurants/:id/menu"
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path="/restaurants/:id/reviews"
          render={() => <Reviews reviews={reviews} restaurantId={id} />}
        />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
