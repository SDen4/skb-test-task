import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITask } from 'src/app/model';
import { TASKS_REDUCER_NODE } from '../reducers/tasks.reducer';

export const taskListFeatureSelector =
  createFeatureSelector<ITask[]>(TASKS_REDUCER_NODE);

export const taskListSelect = createSelector(
  taskListFeatureSelector,
  (state) => state,
);
