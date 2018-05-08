import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  messages_player1: string[] = [];
  messages_player2: string[] = [];
 
  add(message: string, arr: string) {
    if(arr == 'X'){
      this.messages_player1.push(message);
    }
    if(arr == 'O'){
      this.messages_player2.push(message);
    }
  }
 
  clear(arr: string) {
    if(arr == 'X'){
      this.messages_player1 = [];
    }
    if(arr == 'O'){
      this.messages_player2 = [];
    }
  }
}
