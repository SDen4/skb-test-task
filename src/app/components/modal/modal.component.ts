import { Component } from '@angular/core';
import { ChangedTaskService } from 'src/app/services/changed-task.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public modalService: ModalService,
    private changedTask: ChangedTaskService,
  ) {}

  onClickHandler() {
    this.modalService.closeModal();
    this.modalService.changeModalType(null);
    this.changedTask.setChangedTask(null);
  }
}
