import { Component } from '@angular/core';
import { DeletedTaskService } from 'src/app/services/deleted-task.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    public modalService: ModalService,
    private deletedTask: DeletedTaskService,
  ) {}

  onClickHandler() {
    this.modalService.closeModal();
    this.modalService.changeModalType(null);
    this.deletedTask.changeDeletedTaskId(null);
  }
}
