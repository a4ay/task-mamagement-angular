import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

enum STATUS {NEW = 'NEW', IN_PROGRESS = 'IN_PROGRESS', COMPLETE = 'COMPLETE'}

interface task {
  title: string
  description: string
  status: STATUS
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}
  title = 'task-management';

  tasks: task[];

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
