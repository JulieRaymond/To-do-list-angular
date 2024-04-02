import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { CommonModule } from '@angular/common';
import {Task} from "./models/task.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CreateTaskComponent,
    TaskListComponent,
    TaskSearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  taskList: Task[] = []; //tache vers Task
  filteredTaskList: Task[] = [];

  newTaskReceive(task: Task) { // Correction du type de paramètre
    this.taskList.push(task);
    this.filteredTaskList = this.taskList;
  }

  searchedTaskReceive(searchedTerm: string) {
    this.filteredTaskList = this.taskList.filter((task) =>
      task.content.includes(searchedTerm)
    );
  }

  filterTasks(status: string) {
    switch (status) {
      case 'all':
        this.filteredTaskList = this.taskList;
        break;
      case 'completed':
        this.filteredTaskList = this.taskList.filter(task => task.done);
        break;
      case 'incomplete':
        this.filteredTaskList = this.taskList.filter(task => !task.done);
        break;
      default:
        this.filteredTaskList = this.taskList;
        break;
    }
  }

}
