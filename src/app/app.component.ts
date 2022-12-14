import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'
import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

export interface Task {
  id: string
  title: string
  description: string
  createdAt: Date
  completedAt: Date | null
  priority: PRIORITY
}

export enum PRIORITY {
  LOW = 'Low',
  MODERATE = 'Moderate',
  HIGH = 'High',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}
  title = 'task-management'

  todo: Task[] = [
    {
      id: '225d15b1-d92f-4ed3-bfdb-fcfe56c1cadb',
      title: 'tristique in tempus',
      description:
        'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
      createdAt: new Date(),
      completedAt: null,
      priority: PRIORITY.MODERATE,
    },
    {
      id: 'f3819425-4671-4036-b4e6-9d0921ffa33a',
      title: 'eros elementum pellentesque',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      createdAt: new Date(),
      completedAt: null,
      priority: PRIORITY.MODERATE,
    },
    {
      id: 'ebe6cf83-3c14-41dc-a16b-95f959e59614',
      title: 'sapien in sapien iaculis',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      createdAt: new Date(),
      completedAt: null,
      priority: PRIORITY.MODERATE,
    },
    {
      id: 'e08ec66f-6bec-43d5-83df-d7ec7f6281d7',
      title: 'consequat metus sapien ut',
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      createdAt: new Date(),
      completedAt: null,
      priority: PRIORITY.MODERATE,
    },
  ]

  doing: Task[] = [
    {
      id: '7fc6861d-a6f8-4561-956e-82c8d4b1e251',
      title: 'eget vulputate ut ultrices vel',
      description: 'Phasellus in felis.',
      createdAt: new Date(),
      completedAt: null,
      priority: PRIORITY.MODERATE,
    },
    {
      id: 'ba6ad5f8-b60c-4493-8f78-b3a95c6ae258',
      title: 'ante vestibulum ante ipsum primis',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      createdAt: new Date(),
      completedAt: null,
      priority: PRIORITY.MODERATE,
    },
  ]
  done: Task[] = [
    {
      id: 'b8b90343-9fb8-43fa-a741-91260e94bfcf',
      title: 'libero ut',
      description:
        'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
      createdAt: new Date(),
      completedAt: new Date(),
      priority: PRIORITY.MODERATE,
    },
    {
      id: '0fac54e3-b6d1-4e2f-862c-20b9ad22c258',
      title: 'ac tellus',
      description:
        'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
      createdAt: new Date(),
      completedAt: new Date(),
      priority: PRIORITY.MODERATE,
    },
  ]

  public open(modal: any): void {
    this.modalService.open(modal)
  }

  addTask(task: Task) {
    this.todo.push(task)
  }

  onDrop(event: CdkDragDrop<any>) {
    const prevContainerData = event.previousContainer.data
    const containerData = event.container.data
    const previousIndex = event.previousIndex
    const currentIndex = event.currentIndex

    if (containerData === this.done) {
      prevContainerData[previousIndex].completedAt = new Date()
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(containerData, previousIndex, currentIndex)
    } else {
      transferArrayItem(
        prevContainerData,
        containerData,
        previousIndex,
        currentIndex,
      )
    }
  }

  deleteTask(id: string) {
    this.todo = this.todo.filter((task) => task.id !== id)
    this.doing = this.doing.filter((task) => task.id !== id)
    this.done = this.done.filter((task) => task.id !== id)
  }

  updateTask(task: Task) {
    let thisTask: Task
    !thisTask && (thisTask = this.todo.find((tsk) => tsk.id === task.id))
    !thisTask && (thisTask = this.doing.find((tsk) => tsk.id === task.id))
    !thisTask && (thisTask = this.done.find((tsk) => tsk.id === task.id))
    thisTask.title = task.title
    thisTask.description = task.description
    thisTask.priority = task.priority
  }
}
