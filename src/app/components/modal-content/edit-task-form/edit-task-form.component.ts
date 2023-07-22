import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ChangedTaskService } from 'src/app/services/changed-task.service';
import { ModalService } from 'src/app/services/modal.service';

import { changeTask } from 'src/app/store/actions/tasks.actions';

import { ITask } from 'src/app/model';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css'],
})
export class EditTaskFormComponent {
  constructor(
    public modalService: ModalService,
    private store: Store<ITask[]>,
    public changedTask: ChangedTaskService,
  ) {}

  form = new FormGroup({
    title: new FormControl<string>(
      String(this?.changedTask?.changedTask$.value?.title),
      [(Validators.required, Validators.minLength(5))],
    ),
    description: new FormControl<string>(
      String(this?.changedTask?.changedTask$.value?.description),
      [Validators.required, Validators.minLength(5)],
    ),
    deadline: new FormControl<string>(
      String(this?.changedTask?.changedTask$.value?.deadline),
      [Validators.required],
    ),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }
  get description() {
    return this.form.controls.description as FormControl;
  }
  get deadline() {
    return this.form.controls.deadline as FormControl;
  }

  onCancelHandler() {
    this.modalService.closeModal();
    this.modalService.changeModalType(null);
    this.changedTask.setChangedTask(null);
  }

  onSubmit() {
    if (
      !this.form.controls.title.value ||
      !this.form.controls.description.value ||
      !this.form.controls.deadline.value ||
      this.title.errors ||
      this.description.errors ||
      this.deadline.errors
    )
      return;

    this.store.dispatch(
      changeTask({
        task: {
          ...this.form.value,
          id: this.changedTask.changedTask$.value?.id,
          isDone: this.changedTask.changedTask$.value?.isDone,
        } as ITask,
      }),
    );

    this.onCancelHandler();
  }
}
