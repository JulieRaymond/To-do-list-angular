import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  @Output() newTask: EventEmitter<Task> = new EventEmitter(); // Utilisation de l'annotation @Output

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      content: ['', Validators.required],
      done: [false]
    });
  }

  sendTaskToApp() {
    this.newTask.emit(this.taskForm.value as Task);
    this.taskForm.reset({ content: '', done: false });
  }
}
