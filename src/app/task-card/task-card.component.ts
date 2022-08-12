import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Input() bgStyle: string ='';
  @Output() deleteTaskEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  deleteTask(event: any, task: Task) {
    this.deleteTaskEvent.emit(task.id);
  }


}
