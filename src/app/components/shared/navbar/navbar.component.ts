import { Component, OnInit } from '@angular/core';
// import { Heroe } from '../../../servicios/heroes.service';
import { HeroesService, Heroe } from '../../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  private heroes: Heroe[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ) {
    this.router.navigate( ['/buscando', termino] );
  }
}
