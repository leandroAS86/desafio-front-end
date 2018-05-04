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
  
  formdata;
  player_1;
  player_2;

  onFormSubmit(data) {
    this.player_1 = data.player_1;
    this.player_2 = data.player_2;
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      player_1: new FormControl("", Validators.compose([
         Validators.required,
      ])),
      player_2: new FormControl("", Validators.compose([
        Validators.required,
      ])),
    });
  }
}
