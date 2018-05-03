import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HashSignComponent } from './hash-sign/hash-sign.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HashSignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
