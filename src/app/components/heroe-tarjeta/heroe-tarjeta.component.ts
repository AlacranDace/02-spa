import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = []; //Dice que la propiedad Heroe puede venir desde afuera
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  verHeroe( idx: number ) {
    //console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
  }

}
