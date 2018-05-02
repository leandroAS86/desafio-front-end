import { Component, OnInit } from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  player_1: Player = {
  	id: 1,
  	name: 'jogador 1'
  }

  player_2: Player = {
  	id: 2,
  	name: 'jogador 2'
  }

  ngOnInit() {
  }

}
