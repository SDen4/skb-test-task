import { Component, Input } from '@angular/core';

import { ITask } from 'src/app/model';
import { DeletedTaskService } from 'src/app/services/deleted-task.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: ITask | undefined;

  constructor(
    public modalService: ModalService,
    private deletedTaskId: DeletedTaskService,
  ) {}

  onDeleteHandler() {
    if (!this.task?.title) return;

    this.deletedTaskId.changeDeletedTaskId(this.task);
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
}
