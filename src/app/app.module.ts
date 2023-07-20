import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { taskListReducer } from './store/reducers/tasks.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { DeleteTaskBtnsComponent } from './components/delete-task-btns/delete-task-btns.component';
import { EditTaskFormComponent } from './components/edit-task-form/edit-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    AddButtonComponent,
    AddTaskFormComponent,
    FocusDirective,
    TaskListComponent,
    TaskComponent,
    DeleteTaskBtnsComponent,
    EditTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ taskList: taskListReducer }),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
