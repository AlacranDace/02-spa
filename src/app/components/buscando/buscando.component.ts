import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscando',
  templateUrl: './buscando.component.html'
})
export class BuscandoComponent implements OnInit {

  heroes: Heroe[] = [];
  // pintar: Heroe[] = [];
  termino = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
    ) {
      this.heroes = this._heroesService.getHeroes();
      this.activatedRoute.params.subscribe ( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
      });

     }

  ngOnInit(): void {
  }

  // Utilizamos el elemento router para hacer que se navegue a un path en concreto
  verHeroe( idx: number ) {
   this.router.navigate( ['/heroe', idx] );
   console.log(idx);
  }
}
