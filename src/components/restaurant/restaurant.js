import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';
import {
  productsListSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Restaurant = ({
  id,
  name,
  reviews,
  averageRating,
  loadProducts,
  products,
  loading,
  loaded,
}) => {
  useEffect(() => {
    loadProducts(id);
  }, []); // eslint-disable-line

  const tabs = [
    { title: 'Menu', content: <Menu menu={products} restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  if (loading || !loaded) return <Loader />;

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  (state, props) => {
    return {
      products: productsListSelector(state),
      loading: productsLoadingSelector(state),
      loaded: productsLoadedSelector(state),
      averageRating: averageRatingSelector(state, props),
    };
  },
  { loadProducts }
)(Restaurant);
