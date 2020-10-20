import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  // Utilizamos el elemento router para hacer que se navegue a un path en concreto
  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
    // console.log(idx);
  }

}
