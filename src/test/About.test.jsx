import React from 'react';
import { shallow } from 'enzyme';
import About from '../Components/About';

describe('<About /', () => {
  it('should render a div without crashing', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
