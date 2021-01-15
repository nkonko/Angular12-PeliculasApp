import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { ICast } from '../../Interfaces/ICast';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() cast: ICast[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView:5.3,
      freeMode:true,
      spaceBetween:15
    })
  }
}
