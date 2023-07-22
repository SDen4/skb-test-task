import { DragDropModule } from '@angular/cdk/drag-drop';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AddTaskFormComponent } from './components/modal-content/add-task-form/add-task-form.component';
import { DeleteTaskBtnsComponent } from './components/modal-content/delete-task-btns/delete-task-btns.component';
import { EditTaskFormComponent } from './components/modal-content/edit-task-form/edit-task-form.component';
import { ShowTaskComponent } from './components/modal-content/show-task/show-task.component';
import { AddButtonComponent } from './components/ui/add-button/add-button.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { TaskComponent } from './components/ui/task/task.component';
import { TaskListComponent } from './components/ui/task-list/task-list.component';

import { FocusDirective } from './directives/focus.directive';

import { taskListReducer } from './store/reducers/tasks.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    AddButtonComponent,
    AddTaskFormComponent,
    TaskListComponent,
    TaskComponent,
    DeleteTaskBtnsComponent,
    EditTaskFormComponent,
    ShowTaskComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ taskList: taskListReducer }),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
