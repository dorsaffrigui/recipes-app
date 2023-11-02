import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../services/recipes.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, combineLatest, map, startWith, tap } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule,  FlexLayoutModule, MatCardModule, MatButtonModule,    MatToolbarModule, RouterModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent{

  recipes : any;

  filter: { title?: string; tags?: string } = {};

  constructor(private recipesService : RecipesService) {

  }

    //Reacts to search key change
    private searchActionSubjet = new BehaviorSubject<string>('');
    searchSelectedAction$ = this.searchActionSubjet.asObservable();
    
  recipes$ = this.recipesService.getAll();


    recipesFiltered$ = combineLatest([
      this.recipes$,
      this.searchSelectedAction$
    ]).pipe(
      map(([recipes, searchKey]) =>
        recipes.filter((recipe: any) =>
          recipe.name.toLowerCase().includes(searchKey.toLowerCase()) ||
          recipe.tags.some((tag: any) => tag.toLowerCase().includes(searchKey.toLowerCase()))
        )
      )
    );

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  onSearchChange(event:any) {
    this.searchActionSubjet.next(event.target.value);
  }

}
