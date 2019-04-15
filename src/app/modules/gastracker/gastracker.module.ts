import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastrackerComponent } from './gastracker.component';
import { GastrackerRoutingModule } from './gastracker-routing.module';

@NgModule({
  declarations: [
    GastrackerComponent
  ],
  imports: [
    CommonModule,
    GastrackerRoutingModule
  ]
})
export class GastrackerModule { }
