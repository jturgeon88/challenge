import React from 'react';
import { shallow } from 'enzyme';
import TimeEntryForm from '../../../src/components/TimeEntryForm';
import { createTimeEntry } from '../../../src/utils/timerUtils';
import Task from '../../../src/components/Task';

let addTimeEntry;

beforeAll(() => {
  addTimeEntry = jest.fn();
});

describe('TimeEntryForm', () => {
  it('renders without crashing', () => {
    shallow(<TimeEntryForm addTimeEntry={addTimeEntry} />);
  });

  it('passes setDescription as props to Task component', () => {
    const wrapper = shallow(<TimeEntryForm addTimeEntry={addTimeEntry} />);
    const taskWrapper = wrapper.find('Task');

    expect(taskWrapper.props().setDescription).toBe(wrapper.instance().setDescription);
  });

  it('setDescription sets state with new description', () => {
    const wrapper = shallow(<TimeEntryForm addTimeEntry={addTimeEntry} />);
    const newDescription = "Best Description Ever";

    wrapper.instance().setDescription(newDescription);
    expect(wrapper.state().description).toEqual('Best Description Ever');
  });
});

describe('Task', () => {
  it('calls setDescription when field is changed', () => {
    const setDescription = jest.fn();
    const wrapper = shallow(<Task setDescription={setDescription} />);
    const event = {
      preventDefault: () => {},
      currentTarget: {value: 'This is a change'}
    };

    wrapper.find('input').simulate('change', event);
    expect(setDescription).toHaveBeenCalled();
  });
});
