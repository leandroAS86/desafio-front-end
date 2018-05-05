import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hash-sign',
  templateUrl: './hash-sign.component.html',
  styleUrls: ['./hash-sign.component.css']
})
export class HashSignComponent implements OnInit {

  constructor() { }

  evt: string;

  cellFunction(event){
    this.evt = 'cell click';
  }

  ngOnInit() {
  }

}
