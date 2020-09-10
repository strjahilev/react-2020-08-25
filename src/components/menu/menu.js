import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    nameRestaurant: PropTypes.string.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, nameRestaurant, restaurantId } = this.props;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((product) => (
            <Product
              key={product.id}
              product={product}
              nameRestaurant={nameRestaurant}
              restaurantId={restaurantId}
            />
          ))}
        </div>
      </div>
    );
  }
}

// Menu.propTypes = {
//   menu: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default Menu;
