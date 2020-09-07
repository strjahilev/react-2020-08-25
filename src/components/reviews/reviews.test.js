import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';
import { any, array, object } from 'prop-types';
import Review from './review';

const { reviews } = restaurants[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  let reviewFirst;
  beforeEach(() => {
    reviewFirst = {
      id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
      rating: 5,
      text: 'Not bad',
      user: 'Antony',
    };
  });

  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('isReviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.props().reviews).toEqual(reviews);
  });

  it('isReviewsId', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.props().reviews[0].id).toEqual(reviewFirst.id);
  });
});
