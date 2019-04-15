import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastrackerComponent } from './gastracker.component';

const routes: Routes = [
  {
    path: '',
    component: GastrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastrackerRoutingModule { }
