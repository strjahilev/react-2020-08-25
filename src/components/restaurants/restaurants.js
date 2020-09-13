import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const tabs = restaurants.map((restaurant) => {
    return {
      title: restaurant.id.name,
      content: <Restaurant restaurant={restaurant.id} />,
    };
  });

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => {
  return {
    restaurants: state.restaurants,
  };
})(Restaurants);
