import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends PureComponent {
  static propTypes = {
    restaurants: propTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
