import { Component } from '@angular/core';
import { ChangedTaskService } from 'src/app/services/changed-task.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent {
  maxTaskTitleLength = 30;

  constructor(
    public modalService: ModalService,
    public changedTask: ChangedTaskService,
  ) {}

  onCancelHandler() {
    this.modalService.closeModal();
    this.modalService.changeModalType(null);
    this.changedTask.setChangedTask(null);
  }

  onEditlHandler() {
    this.modalService.changeModalType('changeTask');
  }
}
