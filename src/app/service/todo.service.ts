import { Injectable } from '@angular/core';
import { Task } from '../models/todo'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: Task[] = [
    {
      taskId: 1,
      createdAt: new Date().toDateString(),
      title: '1MD',
      description:'Pirmais mājas darbs',
    },
    {
      taskId: 2,
      createdAt: new Date().toDateString(),
      title: '2MD',
      description:'Otrais mājas darbs',
    },
    {
      taskId: 3,
      createdAt: new Date().toDateString(),
      title: '3MD',
      description:'Trešais mājas darbs',
    },
  ]
  constructor() { }

  

addTask(task: Task): void {
    task.taskId = this.tasks.length + 1;
    this.tasks.push(task)
}

getTask(taskId: number): Observable<Task | undefined> {
    const task = of(this.tasks.find(task => task.taskId == taskId));
    return task;
}

deleteTask(task: Task): void {
    const id = this.tasks.indexOf(task);

    if (id >= 0) {
        this.tasks.splice(id, 1);
    }
}

updateTask(taskId: number, task: Task): void {
    task.taskId = taskId;
    const id = this.tasks.findIndex(task => task.taskId == taskId)
    this.tasks.splice(id, 1, task);
}

}
