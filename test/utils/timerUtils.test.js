import { getTimeEntry, createTimeEntry, extractPartialEntry } from '../../src/utils/timerUtils';
import timeEntrySeeds from '../../dummyData/timeEntries';

afterEach(() => {
  localStorage.clear();
});

describe('timer utilities', () => {
  it('it sets and gets time entry in local storage', () => {
    const timeEntry = { description: 'This is a task' };
    const key = createTimeEntry(timeEntry);
    const timeEntryFromLocalStorage = getTimeEntry(key);
    expect(timeEntryFromLocalStorage.description).toBe('This is a task');
  });

  describe('extractPartialEntry', () => {
    it('returns only the timeEntry with no endTime', () => {
      const noEndTimeEntry = {
        description: 'This task has no endTime',
        selectedProject: '',
        selectedCategories: [],
        billable: false,
        startTime: '',
        endTime: ''
      };
      const timeEntry = {
        description: 'This task has an endTime',
        selectedProject: '',
        selectedCategories: [],
        billable: false,
        startTime: '',
        endTime: '1:00pm'
      };
      createTimeEntry(timeEntry);
      const key = createTimeEntry(noEndTimeEntry);
      const extractedEntry = extractPartialEntry();
      expect(extractedEntry[key].description).toBe("This task has no endTime");
    });
  });
});
