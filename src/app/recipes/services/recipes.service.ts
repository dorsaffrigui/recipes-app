import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, shareReplay } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  apiUrl = 'https://recipesapi.kutaybekleric.com/recipes';

  constructor(private http: HttpClient) { }

  recipes$ = this.http.get<Recipe[]>(this.apiUrl).pipe(
    shareReplay(1),
    catchError((err: Error) => {
      throw err.message;
    })
  );

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`).pipe(
      map((data) => (Array.isArray(data) && data.length > 0 ? data[0] : null)),
      catchError((err: Error) => {
        throw err.message;
      })
    );
  }
}