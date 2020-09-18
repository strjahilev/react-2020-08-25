import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants/:restId" component={Restaurants} />
          <Route path="/" render={() => <div>404 - not found</div>} />
        </Switch>
      </div>
    );
  }
}
