import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, NgModel, NgForm } from '@angular/forms';
import { STATUS, Task } from '../app.component';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.css']
})
export class NewTaskFormComponent implements OnInit {

  closeResult = '';
  // taskForm = new FormGroup({
  //   title: new FormControl(''),
  //   description: new FormControl(''),
  // })

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  // addTask() {
  //   console.log(this.taskForm);
  // }

  open(modal: any) {
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addNewTask(taskForm: NgForm) {
    const task: Task = {
      ...taskForm.value,
      status: STATUS.NEW
    }
    console.log(task);
  }

}
