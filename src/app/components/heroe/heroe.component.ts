//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  //dc = false;
  //marvel = false;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
    ) { 

      this.activatedRoute.params.subscribe ( params => {
        //console.log(params['id']);
        this.heroe = this._heroesService.getHeroe( params['id'] );
        //console.log(this.heroe);
        /*
        switch( this.heroe.casa) {
          case 'DC': {
             this.dc = true;
             this. marvel = false;
             break;
          }
          case 'Marvel': {
             this.dc = false;
             this. marvel = true;
             break;
          }
          default: {
             this.dc = false;
             this. marvel = false;
             break;
          }
       }*/
      });

  }

  //Utilizamos el elemento router para hacer que se navegue a un path en concreto
  volverHeroes ( ) {
    this.router.navigate( ['/heroes'] );
  }


}
