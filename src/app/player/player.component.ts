import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Player} from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  PLAYER: Player [];
  formData: FormGroup;
  player_1: FormControl;
  player_2: FormControl;
  playerInit: number;
  setHashSign: boolean;

  onFormSubmit(data) {
    this.PLAYER = [
      {id: 1, color: '#0000ff', name: data.player_1},
      {id: 2, color: '#ff0000', name: data.player_2}
    ]
    this.playerInit = Math.floor(Math.random() * 2);
    this.setHashSign = true;
  }

  ngOnInit(): void{
    this.formData = new FormGroup({
      player_1: new FormControl("", Validators.compose([
         Validators.required,
      ])),
      player_2: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });
  }
}
