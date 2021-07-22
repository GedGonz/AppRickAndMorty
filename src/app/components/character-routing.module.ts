import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactereComponent } from "./charactere/charactere.component";
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'all', component: CharactereComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
