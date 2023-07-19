import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ITask } from 'src/app/model';
import { DeletedTaskService } from 'src/app/services/deleted-task.service';
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
    public deletedTask: DeletedTaskService,
  ) {}

  onCancelHandler() {
    this.modalService.changeModalType(null);
    this.modalService.closeModal();
    this.deletedTask.changeDeletedTaskId(null);
  }

  onDeleteHandler() {
    this.store.dispatch(
      deleteTask({ id: Number(this.deletedTask.deletedTaskId$.value?.id) }),
    );

    this.onCancelHandler();
  }
}
