import { Component } from '@angular/core';

import { ChangedTaskService } from './services/changed-task.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public modalService: ModalService,
    public changedTask: ChangedTaskService,
  ) {}
}
