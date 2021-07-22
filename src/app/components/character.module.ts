import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharactereComponent } from './charactere/charactere.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    CharactereComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    InfiniteScrollModule
  ]
})
export class CharacterModule { }
