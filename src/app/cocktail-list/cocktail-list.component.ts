import { Component, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
      console.log(cocktailsFromJsonFile);
    });
  }
}
