import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ITask } from 'src/app/model';
import { ChangedTaskService } from 'src/app/services/changed-task.service';
import { ModalService } from 'src/app/services/modal.service';
import { deleteTask } from 'src/app/store/actions/tasks.actions';

@Component({
  selector: 'app-delete-task-btns',
  templateUrl: './delete-task-btns.component.html',
  styleUrls: ['./delete-task-btns.component.css'],
})
export class DeleteTaskBtnsComponent {
  constructor(
    public modalService: ModalService,
    private store: Store<ITask[]>,
    public deletedTask: ChangedTaskService,
  ) {}

  onCancelHandler() {
    this.modalService.changeModalType(null);
    this.modalService.closeModal();
    this.deletedTask.setChangedTask(null);
  }

  onDeleteHandler() {
    this.store.dispatch(
      deleteTask({ id: Number(this.deletedTask.changedTask$.value?.id) }),
    );

    this.onCancelHandler();
  }
}
