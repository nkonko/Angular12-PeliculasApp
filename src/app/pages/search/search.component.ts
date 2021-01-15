import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/Interfaces/IMovie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  public searchText: string;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) { }
  
  public movies: IMovie[] = [];

  ngOnInit(): void {

      this.activatedRoute.params.subscribe( params =>
      {
        this.searchText = params.texto;
        this.movieService.searchMovies(params.texto).subscribe(movies =>
          {
            this.movies = movies;
          });
      });
  }
  
}
