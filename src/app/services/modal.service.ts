import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalVisible$ = new BehaviorSubject(false);

  openModal() {
    this.isModalVisible$.next(true);
  }

  closeModal() {
    this.isModalVisible$.next(false);
  }
}
