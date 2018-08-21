import { getTimeEntry, createTimeEntry } from '../../src/utils/timerUtils';

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
});
