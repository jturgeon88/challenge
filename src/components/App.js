import React, { Component } from 'react';

import { createTimeEntry, fetchTimeEntries, removeTimeEntry, extractPartialEntry } from '../utils/timerUtils';

import Navbar from './Navbar';
import TimeEntryForm from './TimeEntryForm';
import TimerHistory from './TimerHistory';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeEntries: {},
      partialEntry: extractPartialEntry()
    };

    this.addTimeEntry = this.addTimeEntry.bind(this);
    this.deleteTimeEntry = this.deleteTimeEntry.bind(this);
    this.retrieveTimeEntries = this.retrieveTimeEntries.bind(this);
    this.removePartialEntry = this.removePartialEntry.bind(this);
  }

  componentDidMount() {
    this.retrieveTimeEntries();
  }

  removePartialEntry() {
    this.setState({ partialEntry: false });
  }

  retrieveTimeEntries() {
    const timeEntries = fetchTimeEntries();

    this.setState({ timeEntries });
  }

  // TODO: reload this from localstorage
  addTimeEntry(entry) {
    createTimeEntry(entry);
    this.retrieveTimeEntries();
  }

  //Remove time entry from local storage and from state
  deleteTimeEntry(id) {
    // remove entry from localStorage
    removeTimeEntry(id);

    // Create newTimeEntries and delete specified entry
    Object.freeze(this.state);
    const newTimeEntries = this.state.timeEntries;
    delete newTimeEntries[id];

    this.setState({timeEntries: newTimeEntries});
  }

  render() {
    const { timeEntries } = this.state;

    return (
      <div>
        <Navbar />
        <TimeEntryForm
          addTimeEntry={this.addTimeEntry}
          partialEntry={this.state.partialEntry}
          retrieveTimeEntries={this.retrieveTimeEntries}
          removePartialEntry={this.removePartialEntry} />
        <TimerHistory timeEntries={timeEntries} deleteTimeEntry={this.deleteTimeEntry} />
      </div>
    );
  }
}
