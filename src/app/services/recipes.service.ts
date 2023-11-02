import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  apiUrl='https://recipesapi.kutaybekleric.com/recipes/';

  constructor(private http: HttpClient) { }

  getAll() :Observable<any>{
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError<any>(`fetch actors`))
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
