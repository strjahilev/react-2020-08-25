import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';

const Order = ({ order, describes }) => {
  const sumOrder = useMemo(() => {
    return describes.reduce((acc, { price }) => acc + price, 0);
  }, [describes]);

  return (
    <>
      <div>
        {describes &&
          describes.length !== 0 &&
          describes.map((describe, index) => {
            if (index > 0) {
              if (
                describes[index - 1].restaurantId !==
                describes[index].restaurantId
              ) {
                return (
                  <div key={describe.id} className={styles.dish}>
                    <p className={styles.restaurant}>
                      РЕСТОРАН: {describe.nameRestaurant}
                    </p>
                    <p>Блюдо: {describe.name}</p>
                    <p>Цена: {describe.price * order[describe.id]}</p>
                  </div>
                );
              } else {
                return (
                  <div key={describe.id} className={styles.dish}>
                    <p>Блюдо: {describe.name}</p>
                    <p>Цена: {describe.price * order[describe.id]}</p>
                  </div>
                );
              }
            } else {
              return (
                <div key={describe.id} className={styles.dish}>
                  <p className={styles.restaurant}>
                    РЕСТОРАН: {describe.nameRestaurant}
                  </p>
                  <p>Блюдо: {describe.name}</p>
                  <p>Цена: {describe.price * order[describe.id]}</p>
                </div>
              );
            }
          })}
      </div>
      <div>
        <p>СУММА К ОПЛАТЕ: {sumOrder} $</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  describes: state.describeOrder.describes,
  rest: state.describeOrder.rest,
});

export default connect(mapStateToProps, undefined)(Order);
