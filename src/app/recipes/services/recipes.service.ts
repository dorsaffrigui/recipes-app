import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, shareReplay } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  apiUrl = 'https://recipes-json-server.onrender.com/recipes';

  constructor(private http: HttpClient) { }

  recipes$ = this.http.get<Recipe[]>(this.apiUrl).pipe(
    shareReplay(1),
    catchError((err: Error) => {
      throw err.message;
    })
  );

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`).pipe(
      catchError((err: Error) => {
        throw err.message;
      })
    );
  }
}
