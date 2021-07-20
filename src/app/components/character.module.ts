import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharactereComponent } from './charactere/charactere.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    CharactereComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    InfiniteScrollModule
  ]
})
export class CharacterModule { }
