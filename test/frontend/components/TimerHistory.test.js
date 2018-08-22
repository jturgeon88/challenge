import React from 'react';
import { shallow } from 'enzyme';
import TimerHistory from '../../../src/components/TimerHistory';
import timeEntrySeeds from '../../../dummyData/timeEntries';

describe('TimerHistory Component', () => {
  it('renders without crashing', () => {
    shallow(<TimerHistory timeEntries={timeEntrySeeds()} />);
  });

  it('should pass deleteTimeEntry as props to TimerHistoryItem', () => {
    const deleteTimeEntry = jest.fn();
    const wrapper = shallow(
      <TimerHistory
        timeEntries={timeEntrySeeds()}
        deleteTimeEntry={deleteTimeEntry} />
    );
    const firstTimerHistoryItem = wrapper.find('TimerHistoryItem').at(0);

    expect(firstTimerHistoryItem.props().deleteTimeEntry).toBe(deleteTimeEntry);
  })
});
