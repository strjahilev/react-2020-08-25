import React from 'react';
import propTypes from 'prop-types';
import styles from './navigation.module.css';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

Navigation.propTypes = {
  restaurants: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
  onRestaurantClick: propTypes.func.isRequired,
};

export default Navigation;
