export interface ITask {
  id: number;
  title: string;
  description: string;
  deadline: string;
  isDone: boolean;
}

export type IModalType =
  | 'addNewTask'
  | 'deleteTask'
  | 'changeTask'
  | 'showTask'
  | null;
