import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import {pokemon} from './pokemon'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  title = 'pokemon';
  pokedex;
  selectedpokemon: pokemon;

  constructor(service: PokedexService){
    this.pokedex  = service.getPokemon();
  }

  onSelect(z: pokemon): void {
    this.selectedpokemon = z;
  }
}
