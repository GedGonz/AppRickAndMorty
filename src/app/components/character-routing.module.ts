import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactereComponent } from './charactere/charactere.component';
const routes: Routes = [
  {path:'', component: CharactereComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
