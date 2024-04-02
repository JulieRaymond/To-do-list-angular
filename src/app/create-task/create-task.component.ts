import { Component, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  Output newTaskEmit: EventEmitter<Task> = new EventEmitter();

  taskForm = this.formBuilder.group({
    content: ['', Validators.required],
    done: [false]
  });

  sendTaskToApp() {
    this.newTaskEmit.emit(this.taskForm.value as Task);
    this.taskForm.reset({ content: '', done: false });
  }
}
