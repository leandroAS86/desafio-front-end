import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {Player} from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-hash-sign',
  templateUrl: './hash-sign.component.html',
  styleUrls: ['./hash-sign.component.css']
})
export class HashSignComponent implements OnInit {

  @Input() player: Player[];
  constructor(
      private playerService: PlayerService,
      private route: ActivatedRoute,
      private router : Router,
      private location: Location
    ) { }

  evt: string;
  time: string;
  hasWinner: boolean = false;
  cell: HTMLElement;
  
  cellFunction(id){
    this.cell = document.getElementById(id);
    if(!this.hasWinner){
      if(this.cell.textContent == ''){

        this.time = this.getTime(this.player);                  //obtem qual jogador esta na vez
        this.playerService.setPlayerTime();                     //passa a vez para o proximo jogador
    
        this.cell.innerHTML = this.player[this.time].letter;
        this.cell.style.color = this.player[this.time].color;
    
        this.endOfGame();
      };
    }
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
            this.playerService.setPoints(key);

            this.hasWinner = true;

            alert('vencedor nome: ' + this.player[key].name + ' letra: ' + this.player[key].letter + ' Pontos: ' + this.player[key].points);
          }
        }
      }  
      else{
        for(var key in this.player){
          if(this.player[key].letter == 'O'){
            this.playerService.setPoints(key);

            this.hasWinner = true;

            alert('vencedor nome: ' + this.player[key].name + ' letra: ' + this.player[key].letter + ' Pontos: ' + this.player[key].points);
          }
        }
      }        
      return true;
    }
    else
      return false;
  }

  cleanHash(): void{
    for(var i = 1; i <= 9; i++){
      this.cell = document.getElementById('cell'+i);
      if(this.cell.textContent != null){
        this.cell.innerHTML = '';
      }
    }
    this.hasWinner = false;
  }

  ngOnInit() {
    this.getPlayer();
  }
}
