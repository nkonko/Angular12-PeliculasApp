import {  AfterViewInit, Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { IMovie } from '../../Interfaces/IMovie';

@Component({
  selector: 'app-slideshows',
  templateUrl: './slideshows.component.html',
  styleUrls: ['./slideshows.component.css']
})
export class SlideshowsComponent implements AfterViewInit {
  @Input() movies: IMovie[];
  
  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

}
