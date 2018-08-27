import React from 'react';
import { shallow } from 'enzyme';
import TimerMode from '../../../src/components/TimerMode';
import { createTimeEntry } from '../../../src/utils/timerUtils';
// import timestamps from '../../mock/timestamps';

let isTiming;
let handleTimerClick;

beforeAll(() => {
  isTiming = false;
  handleTimerClick = jest.fn();
});

describe('TimerMode', () => {
  it('renders an empty clock when the timer is stopped', () => {
    const wrapper = shallow(<TimerMode handleTimerClick={handleTimerClick} isTiming={isTiming} />);
    const timeElapsed = wrapper.find('h1').text();
    expect(timeElapsed).toBe('00:00:00');
  });

  // it('automatically calls startTimer when partialEntry', () => {
  //   const startTimer = jest.fn();
  //   const isPartialEntry = true;
  //   const wrapper = shallow(<TimerMode handleTimerClick={handleTimerClick} isTiming={isTiming} isPartialEntry={isPartialEntry} />);
  //
  //   wrapper.instance().componentDidMount();
  //   expect(startTimer).toHaveBeenCalled();
  // });
});
