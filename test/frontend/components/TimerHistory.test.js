import React from 'react';
import { shallow } from 'enzyme';
import TimerHistory from '../../../src/components/TimerHistory';
import timeEntrySeeds from '../../../dummyData/timeEntries';

describe('TimerHistory Component', () => {
  it('renders without crashing', () => {
    shallow(<TimerHistory timeEntries={timeEntrySeeds()} />);
  });
});
