import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Task } from '../app.component'

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css'],
})
export class EditTaskFormComponent implements OnInit {
  @Input() task: Task
  @Output() updateTaskEvent: EventEmitter<Task> = new EventEmitter<Task>()

  closeResult: string = ''

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  updateTask(taskForm: NgForm): void {
    const updatedTask: Task = taskForm.value
    this.updateTaskEvent.emit(updatedTask)
  }

  open(modal: any): void {
    this.modalService
      .open(modal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
        },
      )
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }
}
