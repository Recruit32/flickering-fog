import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnObservablesComponent } from './learn-observables.component';
import { RxjsInfoComponent } from './rxjs-info/rxjs-info.component';

const routes: Routes = [
  {
    path: '',
    component: LearnObservablesComponent
  },
  {
    path: 'rxjs',
    component: RxjsInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnObservablesRoutingModule { }
