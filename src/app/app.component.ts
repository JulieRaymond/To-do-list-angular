import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { Task } from './models/task.model';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { HelloWorldService } from './hello-world.service';
import { CocktailService } from './cocktail.service';
import { Cocktail } from './models/cocktail.model';
import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CreateTaskComponent,
    TaskListComponent,
    TaskSearchComponent,
    CocktailListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  taskList: Task[] = [];
  filteredTaskList: Task[] = [];

  imgOfTheDay: string = '';

  private helloWorldService = inject(HelloWorldService);
  private nasaService = inject(NasaService);

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((apod) => {
      this.imgOfTheDay = apod.url;
    });
  }

  newTaskReceive(task: any) {
    this.taskList.push(task);
    this.filteredTaskList = this.taskList;
  }

  searchedTaskReceive(searchedTerm: string) {
    this.filteredTaskList = this.taskList.filter((task) =>
      task.content.includes(searchedTerm)
    );
  }

  onClick() {
    console.log(this.helloWorldService.getHelloWorld());
  }
}
