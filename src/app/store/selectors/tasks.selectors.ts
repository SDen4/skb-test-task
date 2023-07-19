import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITaskListState } from '../state/tasks.state';
import { TASKS_REDUCER_NODE } from '../reducers/tasks.reducer';

export const taskListFeatureSelector =
  createFeatureSelector<ITaskListState>(TASKS_REDUCER_NODE);

export const taskListSelect = createSelector(
  taskListFeatureSelector,
  (state) => state,
);
