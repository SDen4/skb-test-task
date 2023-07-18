import { createReducer, on } from '@ngrx/store';
import { initTaskListState } from '../state/tasks.state';
import { addTask, changeTask, deleteTask } from '../actions/tasks.actions';

export const TASKS_REDUCER_NODE = 'taskList';

export const taskListReducer = createReducer(
  initTaskListState,
  on(addTask, (state, { task }) => [task, ...state]),

  on(deleteTask, (state, { id }) => {
    const taskList = state.filter((el) => el.id !== id);
    return [...taskList];
  }),

  on(changeTask, (state, { task }) => {
    const taskList = state.map((el) => (el.id === task.id ? task : el));
    return [...taskList];
  }),
);
