import uuid from 'uuid/v1';

module.exports = () => ({
  [uuid()]: {
    billable: false,
    categories: [{}],
    description: 'Some task',
    // project: {},
    endTime: '2018-07-04 16:15:00.000',
    startTime: '2018-07-04 13:00:00.000',
  },
  [uuid()]: {
    billable: false,
    categories: [{}],
    description: 'Another task',
    // project: {},
    endTime: '2018-07-04 17:00:00.000',
    startTime: '2018-07-04 15:00:00.000',
  },
  [uuid()]: {
    billable: true,
    categories: [{}],
    description: 'Yet another task',
    // project: {},
    endTime: '2018-07-04 09:15:00.000',
    startTime: '2018-07-04 08:00:00.000',
  },
});
