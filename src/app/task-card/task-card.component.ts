import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Task, PRIORITY } from '../app.component'

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() tasks: Task[] = []
  @Input() taskStatus: string
  @Output() deleteTaskEvent: EventEmitter<string> = new EventEmitter<string>()
  @Output() updateTaskEvent: EventEmitter<Task> = new EventEmitter<Task>()
  closeResult: string = ''
  bgStyle = {
    [PRIORITY.LOW] : 'bg-success',
    [PRIORITY.MODERATE] : 'bg-primary',
    [PRIORITY.HIGH] : 'bg-danger',
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  deleteTask(event: any, task: Task) {
    this.deleteTaskEvent.emit(task.id)
  }

  updateTask(task: Task) {
    this.updateTaskEvent.emit(task)
  }
}
