import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import {pokemon} from '../pokemon/pokemon'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pokedex;
  selectedpokemon: pokemon;

  constructor(service: PokedexService){
    this.pokedex  = service.getPokemon();
  }

  ngOnInit() {
  }

  onSelect(z: pokemon): void {
    this.selectedpokemon = z;
  }

}
