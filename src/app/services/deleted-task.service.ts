import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../model';

@Injectable({
  providedIn: 'root',
})
export class DeletedTaskService {
  deletedTaskId$ = new BehaviorSubject<ITask | null>(null);

  changeDeletedTaskId(value: ITask | null) {
    this.deletedTaskId$.next(value);
  }
}
