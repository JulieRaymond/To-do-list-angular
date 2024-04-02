import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-search.component.html',
  styleUrl: './task-search.component.css'
})
export class TaskSearchComponent {

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>(); // Définition de l'événement searchTermChange

  onSearchTermChange(event: Event): void {
    this.searchTermChange.emit((event.target as HTMLInputElement).value);
  }
}
