import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import {Player} from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router) { }

  formData: FormGroup;
  PLAYER: string[] = [];
  
   submitted = false;

  onFormSubmit(data){
    this.submitted = true;
    this.PLAYER.push(data.player_1);
    this.PLAYER.push(data.player_2);

    this.setPlayer();

    this.router.navigate(['/', 'app-hash-sign']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
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
  
  ngOnInit(): void{
    this.formValidator();
  }
}
