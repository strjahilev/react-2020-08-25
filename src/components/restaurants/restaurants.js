import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const newRest = Object.values(restaurants);

  const tabs = newRest.map((restaurant) => {
    return {
      title: restaurant.name,
      content: <Restaurant restaurant={restaurant} />,
    };
  });

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => {
  return {
    restaurants: state.restaurants,
  };
})(Restaurants);
