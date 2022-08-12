import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskFormComponent,
    TaskCardComponent,
    EditTaskFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
