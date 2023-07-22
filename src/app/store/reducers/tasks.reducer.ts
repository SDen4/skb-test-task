import { createReducer, on } from '@ngrx/store';

import {
  addTask,
  changeTask,
  deleteTask,
  replaceTasks,
} from '../actions/tasks.actions';
import { initTaskListState } from '../state/tasks.state';

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

  on(replaceTasks, (state, { tasks }) => {
    return [...tasks];
  }),
);
