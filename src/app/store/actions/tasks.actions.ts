import { createAction, props } from '@ngrx/store';

import { ITask } from 'src/app/model';

export enum ETaskActions {
  AddTask = '[TASK] Add Task',
  DeleteTask = '[TASK] Delete Task',
  ChangeTask = '[TASK] Change Task',
  ReplaceTask = '[TASK] Replace Task',
}

export const addTask = createAction(
  ETaskActions.AddTask,
  props<{ task: ITask }>(),
);
export const deleteTask = createAction(
  ETaskActions.DeleteTask,
  props<{ id: number }>(),
);
export const changeTask = createAction(
  ETaskActions.ChangeTask,
  props<{ task: ITask }>(),
);
export const replaceTasks = createAction(
  ETaskActions.ReplaceTask,
  props<{ tasks: ITask[] }>(),
);
