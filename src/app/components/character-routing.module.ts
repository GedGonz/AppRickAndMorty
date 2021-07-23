import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactereComponent } from "./charactere/charactere.component";
import { DetailCharacterComponent } from "./detail-character/detail-character.component";
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'all', component: CharactereComponent},
  {path:'detail/:id', component: DetailCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
