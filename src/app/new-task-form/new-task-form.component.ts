import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { NgForm } from '@angular/forms'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '../app.component'

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css'],
})
export class NewTaskFormComponent implements OnInit {
  closeResult: String = ''
  @Output() newTaskEvent: EventEmitter<Task> = new EventEmitter<Task>()

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

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

  addNewTask(taskForm: NgForm): void {
    const task: Task = {
      id: uuidv4().toString(),
      ...taskForm.value,
      createdAt: new Date(),
      completedAt: null,
    }
    this.newTaskEvent.emit(task)
  }
}
