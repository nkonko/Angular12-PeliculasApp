import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchMovie(txt: string)
  {
    
    if(txt.length === 0)
    {
       return;
    }

    txt = txt.trim();
    
    this.router.navigate(['/search',txt]);
  }
}
