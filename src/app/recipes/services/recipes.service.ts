import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  apiUrl = 'https://recipesapi.kutaybekleric.com/recipes';

  constructor(private http: HttpClient) { }


  recipes$ = this.http.get<Recipe[]>(this.apiUrl).pipe(
    shareReplay(1),
    catchError(this.handleError<Recipe[]>(`fetch recipes`))
  );

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`).pipe(
      map((data) => (Array.isArray(data) && data.length > 0 ? data[0] : null)),
      shareReplay(1),
      catchError(this.handleError<Recipe>(`fetch recipe ${id}`))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
