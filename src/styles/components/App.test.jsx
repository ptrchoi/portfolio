import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';

describe('<App /', () => {
  it('should render a div without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
