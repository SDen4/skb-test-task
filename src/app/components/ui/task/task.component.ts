import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ChangedTaskService } from 'src/app/services/changed-task.service';
import { ModalService } from 'src/app/services/modal.service';

import { changeTask } from 'src/app/store/actions/tasks.actions';

import { ITask } from 'src/app/model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: ITask | undefined;

  maxTaskTitleLength = 30;

  constructor(
    public modalService: ModalService,
    private changedTask: ChangedTaskService,
    private store: Store<ITask[]>,
  ) {}

  onDeleteHandler(event: { stopImmediatePropagation: () => void }) {
    event.stopImmediatePropagation();
    if (!this.task?.title) return;

    this.changedTask.setChangedTask(this.task);
    this.modalService.changeModalType('deleteTask');
    this.modalService.openModal();
  }

  createTaskColor() {
    const year = Number(this.task?.deadline.slice(0, 4));
    const month = Number(this.task?.deadline.slice(5, 7));
    const day = Number(this.task?.deadline.slice(8));

    const threeDaysTimestamp = 259200000;

    const taskTimestamp = new Date(year, month - 1, day).getTime();
    const currentTimestamp = new Date().getTime();

    if (currentTimestamp >= taskTimestamp) {
      return 'lightsalmon';
    }
    if (taskTimestamp - currentTimestamp <= threeDaysTimestamp) {
      return 'palegoldenrod';
    }

    return '';
  }

  onEditHandler(event: { stopImmediatePropagation: () => void }) {
    event.stopImmediatePropagation();
    if (!this.task?.id) return;

    this.changedTask.setChangedTask(this.task);
    this.modalService.changeModalType('changeTask');
    this.modalService.openModal();
  }

  onTaskClick() {
    if (!this.task?.id) return;

    this.changedTask.setChangedTask(this.task);
    this.modalService.changeModalType('showTask');
    this.modalService.openModal();
  }

  onDoneHandler(event: { stopImmediatePropagation: () => void }) {
    event.stopImmediatePropagation();
    if (!this.task?.id) return;

    this.store.dispatch(
      changeTask({
        task: { ...this.task, isDone: !this.task.isDone } as ITask,
      }),
    );
  }
}
