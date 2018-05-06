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
    this.time = this.getTime(this.player);
    this.playerService.setPlayerTime();
    this.cell = document.getElementById(id);
    this.cell.innerHTML = this.player[this.time].letter;
    this.cell.style.color = this.player[this.time].color;
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

  ngOnInit() {
    this.getPlayer();
  }
}
