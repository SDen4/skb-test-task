import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { replaceTasks } from 'src/app/store/actions/tasks.actions';
import { taskListSelect } from 'src/app/store/selectors/tasks.selectors';

import { ITask } from 'src/app/model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  taskList$ = this.store.pipe(select(taskListSelect));

  list: ITask[] = [];

  constructor(private store: Store<ITask[]>) {}

  drop(event: CdkDragDrop<ITask[]>) {
    this.taskList$.subscribe((v) => (this.list = v));

    const newTaskList = this.list.concat();
    const curValue = newTaskList[event.currentIndex];
    const prevValue = newTaskList[event.previousIndex];

    newTaskList.splice(event.previousIndex, 1, curValue);
    newTaskList.splice(event.currentIndex, 1, prevValue);

    this.store.dispatch(replaceTasks({ tasks: newTaskList }));
  }
}
