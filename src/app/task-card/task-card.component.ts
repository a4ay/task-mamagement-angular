import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() tasks: Task[] = [];
  @Input() bgStyle: string ='';

  constructor() { }

  ngOnInit(): void {
  }





}
