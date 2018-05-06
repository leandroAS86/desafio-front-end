import { Component, OnInit, Input } from '@angular/core';

import {Player} from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-hash-sign',
  templateUrl: './hash-sign.component.html',
  styleUrls: ['./hash-sign.component.css']
})
export class HashSignComponent implements OnInit {

  @Input() player: Player[];
  constructor(private playerService: PlayerService) { }

  evt: string;
  cell: HTMLElement;
  time: string;

  cellFunction(id){
    this.time = this.getTime(this.player);                  //obtem qual jogador esta na vez
    this.playerService.setPlayerTime();                     //passa a vez para o proximo jogador

    this.cell = document.getElementById(id);
    this.cell.innerHTML = this.player[this.time].letter;
    this.cell.style.color = this.player[this.time].color;

    this.endOfGame();
  }

  getPlayer():void{
    this.playerService.getPlayer().subscribe(player => this.player = player);
  }

  getTime(arr): string{
    for (var key in arr) {
      if(arr[key].time == "1"){
        return key;
      }     
    }
    return '-1';
  }

  endOfGame(){
    if(this.cellEquals('1', '2', '3') || this.cellEquals('4', '5', '6') || 
        this.cellEquals('7', '8', '9') || this.cellEquals('1', '4', '7') || 
        this.cellEquals('2', '5', '8') || this.cellEquals('3', '6', '9') ||
        this.cellEquals('1', '5', '9') || this.cellEquals('3', '5', '7')
      ){
    }
  }

  cellEquals(a: string, b: string, c: string): boolean{

    var cellA = document.getElementById('cell' + a).textContent;
    var cellB = document.getElementById('cell' + b).textContent;
    var cellC = document.getElementById('cell' + c).textContent;

    if ((cellA == cellB) && (cellB == cellC) && (cellA != 'none' && cellA != '')){
      if(cellA == 'X'){
        for(var key in this.player){
          if(this.player[key].letter == 'X'){
            alert('vencedor nome: ' + this.player[key].name + ' letra: ' + this.player[key].letter);
          }
        }
      }  
      else{
        for(var key in this.player){
          if(this.player[key].letter == 'O'){
            alert('vencedor nome: ' + this.player[key].name + ' letra: ' + this.player[key].letter);
          }
        }
      }        
      return true;
    }
    else
      return false;
  }

  ngOnInit() {
    this.getPlayer();
  }
}
