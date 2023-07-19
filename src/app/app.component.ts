import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { DeletedTaskService } from './services/deleted-task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public modalService: ModalService,
    public deletedTaskId: DeletedTaskService,
  ) {}
}
