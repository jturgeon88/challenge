import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../../src/components/Landing';

describe('Landing Component', () => {
  it('renders without crashing', () => {
    shallow(<Landing />);
  });
});
