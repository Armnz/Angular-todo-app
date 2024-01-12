import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../service/todo.service';
import { Task } from '../../models/todo';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    imports: [CommonModule, HeaderComponent, RouterModule]
})
export class TodoListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
}

getTasks(): void {
    this.tasks = this.taskService.tasks;
}

  deleteTask(task: Task): void {
      this.taskService.deleteTask(task);
  }



}
