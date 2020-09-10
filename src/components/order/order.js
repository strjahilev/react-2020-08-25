import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import { describe } from '../../redux/actions';

const Order = ({ order, describes, rest }) => {
  debugger;
  const sumOrder = useMemo(() => {
    return describes.reduce((acc, { price }) => acc + price, 0);
  }, [describes]);

  return (
    <>
      <div>
        {describes &&
          describes.length !== 0 &&
          describes.map((describe) => {
            return (
              <div key={describe.id} className={styles.dish}>
                <p>РЕСТОРАН: {describe.restaurant}</p>
                <p>Блюдо: {describe.name}</p>
                <p>Цена: {describe.price}</p>
              </div>
            );
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
