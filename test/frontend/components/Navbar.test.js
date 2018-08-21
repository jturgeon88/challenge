/* eslint-disable react/jsx-indent */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from '../../../src/components/Navbar';
import logo from '../../static/Moove_It-Logo_W.png';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const isLoggedIn = true;
    const onClick = jest.fn();
    const user = {};

    mount(<Navbar />);
  });

  it('has an anchor element wrapped around the logo', () => {
    const wrap = shallow(<Navbar />);

    expect(wrap.find('a').contains(<img className="mooveItNavybg pt4 mt2 h1" src={logo} alt="Moove-it logo" />)).toBe(true);
  });
});
