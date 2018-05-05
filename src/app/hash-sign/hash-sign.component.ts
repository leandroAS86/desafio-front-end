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
  index: number;

  cellFunction(id){
    this.cell = document.getElementById(id);
    this.cell.innerHTML = this.player[0].letter;
    this.cell.style.backgroundColor = this.player[0].color;
  }

  getPlayer():void{
    this.playerService.getPlayer().subscribe(player => this.player = player);
  }

  ngOnInit() {
    this.getPlayer();
  }

}
