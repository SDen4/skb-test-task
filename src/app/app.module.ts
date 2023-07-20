import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { taskListReducer } from './store/reducers/tasks.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddTaskFormComponent } from './components/add-task-form/add-task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { TaskListComponent } from './components/ui/task-list/task-list.component';
import { TaskComponent } from './components/ui/task/task.component';
import { DeleteTaskBtnsComponent } from './components/delete-task-btns/delete-task-btns.component';
import { EditTaskFormComponent } from './components/edit-task-form/edit-task-form.component';
import { ShowTaskComponent } from './components/show-task/show-task.component';

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
    ShowTaskComponent,
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
