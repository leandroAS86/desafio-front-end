import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Player} from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  players: Player[];
  formData: FormGroup;
  player_1: FormControl;
  player_2: FormControl;
  showHashSign: boolean;
  PLAYER: string[] = [];
  
  onFormSubmit(data): void {
    this.PLAYER.push(data.player_1);
    this.PLAYER.push(data.player_2);
    this.showHashSign = true;
    this.setPlayer();
    //this.getPlayer();
  }

  formValidator(): void{
    this.formData = new FormGroup({
      player_1: new FormControl("", Validators.compose([
         Validators.required,
      ])),
      player_2: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });
    
  }

  setPlayer(): void{
    this.playerService.initPlayer(this.PLAYER);
  }

  getPlayer():void{
    this.playerService.getPlayer().subscribe(players => this.players = players);
  }

  ngOnInit(): void{
    this.formValidator();
  }
}
