import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  totalSelector,
  orderProductsSelector,
  checkoutMatchPageSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { makeOrder } from '../../redux/actions';

import { UserConsumer } from '../../contexts/user';

import { useMoney } from '../../hooks/use-money';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  checkoutMatch,
  makeOrder,
  loading,
}) {
  const m = useMoney();

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      {loading && (
        <div className={styles.loading}>
          <Loader />
        </div>
      )}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s basket`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={m(total)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={m(total)} bold />
      {checkoutMatch ? (
        <Button primary block onClick={makeOrder}>
          make order
        </Button>
      ) : (
        <Link to="/checkout">
          <Button primary block>
            go to checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
    checkoutMatch: checkoutMatchPageSelector,
    loading: orderLoadingSelector,
  }),
  { makeOrder }
)(Basket);
