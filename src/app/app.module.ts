import { BrowserModule } from '@angular/platform-browser';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HashSignComponent } from './hash-sign/hash-sign.component';
import { AppRoutingModule } from './/app-routing.module';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HashSignComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    //NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
