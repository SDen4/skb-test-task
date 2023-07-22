import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ITask } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ChangedTaskService {
  changedTask$ = new BehaviorSubject<ITask | null>(null);

  setChangedTask(value: ITask | null) {
    this.changedTask$.next(value);
  }
}
