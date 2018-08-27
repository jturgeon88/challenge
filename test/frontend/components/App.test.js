import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';
import { createTimeEntry } from '../../../src/utils/timerUtils';
import timeEntrySeeds from '../../../dummyData/timeEntries';


describe('App Component', () => {
  it('passes deleteTimeEntry as props to TimerHistory component', () => {
    const wrapper = shallow(<App />);
    const taskWrapper = wrapper.find('TimerHistory');

    expect(taskWrapper.props().deleteTimeEntry).toBe(wrapper.instance().deleteTimeEntry);
  });

  it('deleteTimeEntry removes specified entry from state', () => {
    const wrapper = shallow(<App />);
    const timeEntries = {
      0: {
        billable: false,
        categories: [{}],
        description: 'Some task',
        // project: {},
        endTime: '2018-07-04 16:15:00.000',
        startTime: '2018-07-04 13:00:00.000',
      },
      1: {
        billable: false,
        categories: [{}],
        description: 'Another task',
        // project: {},
        endTime: '2018-07-04 17:00:00.000',
        startTime: '2018-07-04 15:00:00.000',
      },
      2: {
        billable: true,
        categories: [{}],
        description: 'Yet another task',
        // project: {},
        endTime: '2018-07-04 09:15:00.000',
        startTime: '2018-07-04 08:00:00.000',
      }
    };

    wrapper.setState({ timeEntries });
    expect(Object.keys(wrapper.state().timeEntries).length).toEqual(3);

    wrapper.instance().deleteTimeEntry(0);
    expect(Object.keys(wrapper.state().timeEntries).length).toEqual(2);

    wrapper.instance().deleteTimeEntry(1);
    expect(Object.keys(wrapper.state().timeEntries).length).toEqual(1);
  });

  it('sets partialEntry to false if no partialEntry', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().partialEntry).toBe(false);
  });

  it('sets partialEntry correctly if one exists', () => {
    const noEndTimeEntry = {
      description: 'This task has no endTime',
      selectedProject: '',
      selectedCategories: [],
      billable: false,
      startTime: '',
      endTime: ''
    };
    const key = createTimeEntry(noEndTimeEntry);
    const wrapper = shallow(<App />);

    expect(wrapper.state().partialEntry[key].description).toBe('This task has no endTime');

  });
});
