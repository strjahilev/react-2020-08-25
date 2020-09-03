import React from 'react';
import Menu from './menu';

function Restaurant({ restaurant }) {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <Menu menu={restaurant.menu} />
    </div>
  );
}

export default Restaurant;
