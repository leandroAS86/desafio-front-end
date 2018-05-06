import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor() { }

  PLAYER: Player [] = [];
  
  playerInit: number;

  initPlayer(player: string[]): void{ 

    for(var i = 0; i < player.length; i++){
      this.PLAYER[i] = {id: i, time: '0', name: player[i], color: '', letter:''}
    }
    
    this.playerInit = Math.floor(Math.random() * 2);

    if(this.playerInit == 0){
      this.PLAYER[0].time = '1';              //esse jogador devera iniciar a primeira partida
      this.PLAYER[0].letter = 'X';
      this.PLAYER[0].color = '#ff0000';
      this.PLAYER[1].color = '#0000ff';
      this.PLAYER[1].letter = 'O';
    }
    else {
      this.PLAYER[1].time = '1';              //esse jogador devera iniciar a primeira partida
      this.PLAYER[1].letter = 'X';
      this.PLAYER[0].color = '#ff0000'
      this.PLAYER[1].color = '#0000ff'
      this.PLAYER[0].letter = 'O';
    }
  }

  setPlayerTime(): void{
    if(this.PLAYER[0].time == '1'){
      this.PLAYER[1].time = '1';
      this.PLAYER[0].time = '0';
    }
    else{
      this.PLAYER[0].time = '1';
      this.PLAYER[1].time = '0';
    }
  }
  
  getPlayer(): Observable<Player[]> {  
    return of(this.PLAYER);
  }
}
