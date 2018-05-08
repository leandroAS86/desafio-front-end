import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HashSignComponent } from './hash-sign/hash-sign.component';
import { AppRoutingModule } from './/app-routing.module';
import { PlayerService } from './player.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HashSignComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    PlayerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
