import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ITask } from 'src/app/model';
import { taskListSelect } from 'src/app/store/selectors/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  taskList$ = this.store$.pipe(select(taskListSelect));

  constructor(private store$: Store<ITask[]>) {}
}
