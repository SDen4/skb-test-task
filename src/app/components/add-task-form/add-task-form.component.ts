import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ITask } from 'src/app/model';
import { ModalService } from 'src/app/services/modal.service';
import { addTask } from 'src/app/store/actions/tasks.actions';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent {
  constructor(
    public modalService: ModalService,
    private store: Store<ITask[]>,
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    deadline: new FormControl<string>('', [Validators.required]),
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

  onSubmit() {
    if (this.title.errors || this.description.errors || this.deadline.errors)
      return;

    this.store.dispatch(
      addTask({
        task: {
          ...this.form.value,
          id: new Date().getTime(),
          isDone: false,
        } as ITask,
      }),
    );

    this.modalService.closeModal();
    this.modalService.changeModalType(null);
  }
}
