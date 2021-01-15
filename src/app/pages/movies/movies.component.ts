import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../Interfaces/IMovie';
import { Location } from '@angular/common';
import { ICast } from 'src/app/Interfaces/ICast';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  public movie: IMovie;
  public cast: ICast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private location: Location) { }

  ngOnInit(): void {
  
   const id = this.activatedRoute.snapshot.params.id;

  combineLatest([
    this.movieService.getMovieDetails(id),
    this.movieService.getCast(id)
  ]).subscribe(([movie, cast]) =>{
   
    if(!movie)
    {
      this.checkResponse(movie);
    }
    
    this.movie = movie;
    this.cast = cast.filter(actor => actor.profile_path !== null);;
  });

  //  this.movieService.getMovieDetails(id).subscribe(resp =>{
    
  //   this.checkResponse(resp);
     
  //   this.movie = resp;
  //  });

  //  this.movieService.getCast(id).subscribe(resp =>{
    
  //   this.checkResponse(resp);

  //   this.cast = resp.filter(actor => actor.profile_path != null);
  //  });

  }

  private onTurnBack(): void{
    this.location.back();
  }

  private checkResponse(resp: any){
    if (!resp)
    {
       this.onTurnBack();
       return;
    }
  }

}
