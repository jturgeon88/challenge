import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { displayDate, displayStartAndEndTimes, displayTimeElapsed } from '../utils/timeUtils';
import { removeTimeEntry } from '../utils/timerUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class TimerHistoryItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.deleteTimeEntry(this.props.id);
  }

  render() {
    const {
      billable, categories, description, project, endTime, startTime, deleteTimeEntry
    } = this.props;

    const isTimeOut = endTime !== 0;

    const renderCategories = categories.filter(item => item.selected).map((item, index, arr) => {
      const lastIndex = arr.length - 1;
      return `${item.title}${index === lastIndex ? '' : ', '}`;
    });

    if (!isTimeOut) return '';

    return (
      <div className="black-50 f6 flex justify-between w100 center bg-white br0 pa3 pa3-ns mv3 ba b--black-10">
        <div>{description || 'DESCRIPTION PLACEHOLDER'}</div>
        <div>{project && project.name}</div>
        <div>{renderCategories}</div>
        <div>{billable && '$'}</div>

        <div>{displayDate(startTime)}</div>
        <div>{displayStartAndEndTimes(startTime, endTime)}</div>
        <div>{displayTimeElapsed(startTime, endTime)}</div>
        <FontAwesomeIcon
          className='delete-button pointer gray dim'
          onClick={this.handleClick}
          icon={faTrashAlt}
          size="2x"
        />
      </div>
    );
  }
}

TimerHistoryItem.propTypes = {
  billable: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string.isRequired,
  project: PropTypes.shape({}),
  endTime: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
};

TimerHistoryItem.defaultProps = {
  categories: [],
  project: {},
};
