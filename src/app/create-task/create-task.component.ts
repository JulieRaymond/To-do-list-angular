import { Component, EventEmitter, HostListener, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  @Output() newTaskEmit: EventEmitter<Task> = new EventEmitter();

  formBuilder: FormBuilder = inject(FormBuilder);

  taskForm = this.formBuilder.group({
    content: '',
    done: false
  });

  sendTaskToApp() {
    this.newTaskEmit.emit(this.taskForm.value as Task);
    this.taskForm.reset({ content: '', done: false });
  }
}
