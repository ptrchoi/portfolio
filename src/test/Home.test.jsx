import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Components/Home';

describe('<Home /', () => {
  it('should render a div without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
