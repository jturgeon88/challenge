import React from 'react';
import { shallow } from 'enzyme';
import TimerHistoryItem from '../../../src/components/TimerHistoryItem';
import { displayDate } from '../../../src/utils/timeUtils.js';
import timeEntrySeeds from '../../../dummyData/timeEntries';

const {
  billable, categories, description, project, endTime, startTime,
} = Object.values(timeEntrySeeds())[0];

describe('TimerHistoryItem Component', () => {
  it('renders without crashing', () => {
    shallow(<TimerHistoryItem
      billable={billable}
      categories={categories}
      description={description}
      project={project}
      endTime={endTime}
      startTime={startTime}
    />);
  });

  it('renders the correct date', () => {
    const wrapper = shallow(<TimerHistoryItem
      billable={billable}
      categories={categories}
      categories={[]}
      project={project}
      description={description}
      endTime={endTime}
      startTime={startTime}
    />);

    const datetext = wrapper
      .children()
      .at(4)
      .text();

    expect(datetext).toEqual('07/04/2018');
  });

  it('renders the correct start time and end time', () => {
    const wrapper = shallow(<TimerHistoryItem
      billable={billable}
      categories={categories}
      categories={[]}
      project={project}
      description={description}
      endTime={endTime}
      startTime={startTime}
    />);

    const time = wrapper
      .children()
      .at(5)
      .text();

    expect(time).toEqual('1:00 PM - 4:15 PM');
  });

  it('renders the correct elapsed time', () => {
    const wrapper = shallow(<TimerHistoryItem
      billable={billable}
      categories={categories}
      description={description}
      project={project}
      endTime={endTime}
      startTime={startTime}
    />);

    const time = wrapper
      .children()
      .at(6)
      .text();
    expect(time).toEqual('03:15:00');
  });
});
