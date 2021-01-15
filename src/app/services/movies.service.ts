import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovieResult } from '../Interfaces/IMovieResult';
import { catchError, map, tap } from "rxjs/operators";
import { IMovie } from '../Interfaces/IMovie';
import { ICredits } from '../Interfaces/ICredits';
import { ICast } from '../Interfaces/ICast';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  private url: string = 'https://api.themoviedb.org/3/';
  private page: number = 1;
  public load: boolean = false;

  constructor(private http: HttpClient) { }

  get params(){
    return {
      api_key: '12034531967de7f6613d9fcd94de16a6',
      language: 'es-ES',
      page: this.page.toString()
    }
  }

  public getMovies() : Observable<IMovie[]> {
    const prefix = "movie/now_playing";
    if (this.load)
    {
      return of([]) ;
    }

    this.load = true;
    
    return this.http.get<IMovieResult>(`${this.url}${prefix}`,{params: this.params}).pipe(
      map((resp) => resp.results ),
      tap(() =>{
        this.page += 1
        this.load = false;
      })
    );
  }
  
  public searchMovies(txt: string) {

    const prefix = "search/movie";
    const params = {...this.params, page:'1', query: txt};

    return this.http.get<IMovieResult>(`${this.url}${prefix}`,{params: params}).pipe(
      map((resp) => resp.results ));
  }

  public resetPage() : void {
    this.page = 1;
  }
  
 public getMovieDetails(id: string){
    const prfix = "movie"
    return this.http.get<IMovie>(`${this.url}${prfix}/${id}`,{params: this.params}).pipe(
      catchError(err => of(null))
    );
  }
  
 public getCast(id: string) : Observable<ICast[]>{
    const prfix = "movie"
    return this.http.get<ICredits>(`${this.url}${prfix}/${id}/credits`,{params: this.params}).pipe(
      map(resp => resp.cast),
      catchError(err => of(null))
    );
  }
}
