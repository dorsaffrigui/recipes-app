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
  map,
  shareReplay,
} from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { Recipe } from '../models/recipe';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

  constructor(private recipesService: RecipesService, private router: Router) {}

  //Reacts to search key change
  private searchActionSubjet = new BehaviorSubject<string>('');
  searchSelectedAction$ = this.searchActionSubjet.asObservable();

  recipes$ = this.recipesService.recipes$;

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
    ),
    shareReplay(1)
  );

  onSearchChange(event: any) {
    this.searchActionSubjet.next(event.target.value);
  }

  goToPage(id: number) {
    this.router.navigateByUrl('recipe/' + id);
  }
}
