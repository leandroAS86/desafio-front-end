import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashSignComponent } from './hash-sign/hash-sign.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/app-player', pathMatch: 'full' },
  { path: 'app-hash-sign', component: HashSignComponent },
  { path: 'app-player', component: PlayerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
