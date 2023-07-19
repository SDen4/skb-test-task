import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IModalType } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalVisible$ = new BehaviorSubject(false);
  modalType$ = new BehaviorSubject<IModalType>(null);

  openModal() {
    this.isModalVisible$.next(true);
  }

  closeModal() {
    this.isModalVisible$.next(false);
  }

  changeModalType(type: IModalType) {
    this.modalType$.next(type);
  }
}
