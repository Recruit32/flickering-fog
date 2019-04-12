import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LearnObservablesRoutingModule } from './learn-observables-routing.module';

import { LearnObservablesComponent } from './learn-observables.component';
import { RxjsInfoComponent } from './rxjs-info/rxjs-info.component';

@NgModule({
  declarations: [
    LearnObservablesComponent,
    RxjsInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LearnObservablesRoutingModule
  ]
})
export class LearnObservablesModule { }
