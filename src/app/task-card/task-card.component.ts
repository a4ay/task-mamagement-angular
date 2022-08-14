import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Task } from '../app.component'

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() tasks: Task[] = []
  @Input() bgStyle: string = ''
  @Input() taskStatus: string
  @Output() deleteTaskEvent: EventEmitter<string> = new EventEmitter<string>()
  @Output() updateTaskEvent: EventEmitter<Task> = new EventEmitter<Task>()
  closeResult: string = ''

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  deleteTask(event: any, task: Task) {
    this.deleteTaskEvent.emit(task.id)
  }

  updateTask(task: Task) {
    this.updateTaskEvent.emit(task)
  }
}
