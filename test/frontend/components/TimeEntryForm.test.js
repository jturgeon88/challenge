import React from 'react';
import { shallow } from 'enzyme';
import TimeEntryForm from '../../../src/components/TimeEntryForm';
import { createTimeEntry, extractPartialEntry } from '../../../src/utils/timerUtils';

describe('TimeEntryForm Component', () => {
  it('sets state to the partialEntry attributes', () => {
    const noEndTimeEntry = {
      description: 'This task has no endTime',
      selectedProject: '',
      selectedCategories: [],
      billable: false,
      startTime: '',
      endTime: ''
    };

    const key = createTimeEntry(noEndTimeEntry);
    const partialEntry = extractPartialEntry();
    const wrapper = shallow(<TimeEntryForm partialEntry={partialEntry} />);

    expect(wrapper.state().description).toBe('This task has no endTime');
  });
});
