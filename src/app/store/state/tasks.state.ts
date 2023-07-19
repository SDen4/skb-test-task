import { ITask } from 'src/app/model';

export type ITaskListState = ITask[];

export const initTaskListState: ITaskListState = [
  {
    id: 123,
    title: 'Test task red',
    description: 'Description of the test task (Test task red)...',
    deadline: '2021-03-03',
    isDone: false,
  },
  {
    id: 124,
    title: 'Test task orage',
    description: 'Description of the test task (Test task orage)...',
    deadline: '2023-07-22',
    isDone: false,
  },
  {
    id: 125,
    title: 'Test task white',
    description: 'Description of the test task (Test task white)...',
    deadline: '2023-07-27',
    isDone: false,
  },
];
