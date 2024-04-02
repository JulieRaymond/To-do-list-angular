import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() filteredTaskList!: Task[];

  message: string = '';

  showScrollMessage = false;

  onMouseEnter(task: Task) {
    task.showMessage = true; // Affiche le message pour la tâche survolée
  }

  onMouseLeave(task: Task) {
    task.showMessage = false; // Cache le message quand la souris quitte la tâche
  }

  toggleDone(task: Task): void {
    task.done = !task.done;
  }

  deleteTask(index: number) {
    this.filteredTaskList.splice(index, 1);
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollTop > 100 && !this.showScrollMessage) {
      this.showScrollMessage = true;
    } else if (target.scrollTop <= 100 && this.showScrollMessage) {
      this.showScrollMessage = false; // Optionnel, masque le message si l'utilisateur remonte
    }
  }

}
