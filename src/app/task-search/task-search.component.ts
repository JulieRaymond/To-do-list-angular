import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-search.component.html',
  styleUrl: './task-search.component.css'
})
export class TaskSearchComponent {

  @Output() searchTermChangeEmit: EventEmitter<string> = new EventEmitter();

  onSearchTermChange(event: Event): void {
    this.searchTermChangeEmit.emit((event.target as HTMLInputElement).value);
  }
}
