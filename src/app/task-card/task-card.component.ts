import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Output() updateTaskEvent = new EventEmitter<Task>();
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  deleteTask(event: any, task: Task) {
    this.deleteTaskEvent.emit(task.id);
  }

  updateTask(task: Task) {
    this.updateTaskEvent.emit(task);
  }

}
