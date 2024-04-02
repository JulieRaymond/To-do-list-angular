import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  Input filteredTaskList!: Tache[];

  message: string = '';

  onMouseEnter(task: Tache) {
    task.showMessage = true;
  }

  onMouseLeave(task: Tache) {
    task.showMessage = false;
  }

  toggleDone(task: Tache): void {
    task.done = !task.done;
  }

  deleteTask(index: string) {
    this.filteredTaskList.splice(index, 1);
  }
}
