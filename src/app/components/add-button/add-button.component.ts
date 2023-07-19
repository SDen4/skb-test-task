import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
})
export class AddButtonComponent {
  constructor(public modalService: ModalService) {}

  onClickHandler() {
    this.modalService.changeModalType('addNewTask');
    this.modalService.openModal();
  }
}
