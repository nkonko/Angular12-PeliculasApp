import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from 'src/app/Interfaces/IMovie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public movies: IMovie[] = [];
  public moviesSlideShow: IMovie[] = [];
  
  @HostListener('window:scroll', ['$event'])
  
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight) ;

    if ( pos > max )
    {
      if (this.moviesService.load) {
        return;
      }
      this.moviesService.getMovies().subscribe(resp =>{
        this.movies.push(...resp);
      })
    }
  }

  constructor(private moviesService: MoviesService){
    moviesService.getMovies().subscribe(resp =>{
      this.movies = resp;
      this.moviesSlideShow = resp;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   
    this.moviesService.resetPage();
  }

}
