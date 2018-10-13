import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';
  pokedex;

  constructor(service: PokedexService){
    this.pokedex  = service.getPokemon();
  }
}
