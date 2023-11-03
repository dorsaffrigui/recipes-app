import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../services/recipes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  combineLatest,
  map
} from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { Recipe } from '../models/recipe';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatChipsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  filter: { title?: string; tags?: string } = {};
  errorMessage!: string

  constructor(private recipesService: RecipesService, private router: Router) { }

  //Reacts to search key change
  private searchActionSubjet = new BehaviorSubject<string>('');
  searchSelectedAction$ = this.searchActionSubjet.asObservable();

  //fetch recipes
  recipes$ = this.recipesService.recipes$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    }));

  //every time a new search key is emitted by searchActionSubjet, the recipes are filtered based on that new search key
  recipesFiltered$ = combineLatest([
    this.recipes$,
    this.searchSelectedAction$,
  ]).pipe(
    map(([recipes, searchKey]) =>
      recipes.filter(
        (recipe: Recipe) =>
          recipe.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          recipe.tags.some((tag: string) =>
            tag.toLowerCase().includes(searchKey.toLowerCase())
          )
      )
    )
  );

  onSearchChange(event: Event) {
    this.searchActionSubjet.next((event.target as HTMLInputElement).value);
  }

  goToPage(id: number) {
    this.router.navigate(['/recipes', id]);
  }
}
