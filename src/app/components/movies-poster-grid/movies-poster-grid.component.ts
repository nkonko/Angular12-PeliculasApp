import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/Interfaces/IMovie';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  
  @Input() movies: IMovie[];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMovieClick(movie) {
    this.router.navigate(['/movie', movie.id]);
  }
}
