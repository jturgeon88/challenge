import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';
import timeEntrySeeds from '../../../dummyData/timeEntries';


describe('App Component', () => {
  it('passes deleteTimeEntry as props to TimerHistory component', () => {
    const wrapper = shallow(<App />);
    const taskWrapper = wrapper.find('TimerHistory');

    expect(taskWrapper.props().deleteTimeEntry).toBe(wrapper.instance().deleteTimeEntry);
  });
});
