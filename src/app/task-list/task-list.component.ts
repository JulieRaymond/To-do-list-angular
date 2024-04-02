import { Component, Input, Output, EventEmitter } from '@angular/core';// ajout output eventemitter
import { Task } from '../models/task.model';
import {NgForOf, NgIf} from "@angular/common"; //ajout modèle


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() filteredTaskList!: Task[];
  @Output() taskMouseEnter: EventEmitter<Task> = new EventEmitter();
  @Output() taskMouseLeave: EventEmitter<Task> = new EventEmitter();
  @Output() taskToggleDone: EventEmitter<Task> = new EventEmitter();

  message: string = '';

  onMouseEnter(task: Task) { //correction TACHE = TASK
    task.showMessage = true;
  }

  onMouseLeave(task: Task) {
    task.showMessage = false;
  }

  toggleDone(task: Task): void {
    task.done = !task.done;
  }

  deleteTask(index: number) { // Changement de type de index de string à number
    this.filteredTaskList.splice(index, 1);
  }
}
