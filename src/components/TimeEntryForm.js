import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updateTimeEntry, removeTimeEntry } from '../utils/timerUtils';

import Task from './Task';
import Billable from './Billable';
import ProjectSelect from './ProjectSelect';
import CategorySelect from './CategorySelect';
import Timer from './Timer';

const defaultState = {
  description: '',
  selectedProject: '',
  selectedCategories: [],
  billable: false,
  startTime: '',
  endTime: '',
};

export default class TimeEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;

    this.setDescription = this.setDescription.bind(this);
    this.setBillable = this.setBillable.bind(this);
    this.setSelectedProject = this.setSelectedProject.bind(this);
    this.setSelectedCategories = this.setSelectedCategories.bind(this);
    this.setStartTime = this.setStartTime.bind(this);
    this.setEndTime = this.setEndTime.bind(this);
  }

  componentDidMount() {
    const partialEntry = this.props.partialEntry[0];
    if (partialEntry) {
      this.setState({
        description: partialEntry.description,
        selectedProject: partialEntry.selectedProject,
        selectedCategories: partialEntry.selectedCategories,
        billable: partialEntry.billable,
        startTime: partialEntry.startTime
      });
    }
  }

  setDescription(taskName) {
    this.setState({description: taskName});
  }

  setBillable() {
    this.setState(prevState => ({ billable: !prevState.billable }));
  }

  setSelectedProject(updatedSelectedProject) {
    // react-select library turns selectedProject into an array if you remove a selectedProject
    // eslint-disable-next-line no-underscore-dangle
    const selectedProject = Array.isArray(updatedSelectedProject) ? '' : updatedSelectedProject._id;
    this.setState({ selectedProject });
  }

  setSelectedCategories(selectedCategories) {
    this.setState({ selectedCategories });
  }

  setStartTime(startTime) {
    this.setState({ startTime }, () => this.saveTimeEntry());
  }

  setEndTime(endTime) {
    if (this.props.partialEntry) {
      const { partialEntry } = this.props;
      const id = Object.keys(partialEntry)[0];
      this.setState({ endTime });
      updateTimeEntry(id, this.state);
    } else {
      this.setState({ endTime }, () => this.saveTimeEntry());
    }
  }

  saveTimeEntry() {
    const {
      billable,
      selectedCategories,
      description,
      selectedProject,
      startTime,
      endTime,
    } = this.state;
    const { addTimeEntry } = this.props;

    addTimeEntry({
      billable,
      categories: selectedCategories,
      description,
      selectedProject,
      endTime,
      startTime,
    });

    this.resetForm();
  }

  resetForm() {
    this.setState(defaultState);
  }

  render() {
    const {
      billable, selectedCategories, selectedProject, startTime, description
    } = this.state;
    const isPartialEntry = !!this.props.partialEntry;

    return (
      <div className="mw100 center bg-white br3 h3 pa3 mv3 ba b--black-10 flex justify-between items-center">
        <Task setDescription={this.setDescription} description={description}/>

        <ProjectSelect
          setSelectedProject={this.setSelectedProject}
          selectedProject={selectedProject}
        />

        <CategorySelect
          selectedCategories={selectedCategories}
          setSelectedCategories={this.setSelectedCategories}
        />

        <Billable setBillable={this.setBillable} billable={billable} />

        <Timer
          setStartTime={this.setStartTime}
          setEndTime={this.setEndTime}
          startTime={startTime}
          isPartialEntry={isPartialEntry}
        />
      </div>
    );
  }
}

TimeEntryForm.propTypes = {
  addTimeEntry: PropTypes.func.isRequired,
};
