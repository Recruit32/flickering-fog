import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './ui/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'demo/gastracker',
    loadChildren: './modules/gastracker/gastracker.module#GastrackerModule'
  },
  {
    path: 'learn/observables',
    loadChildren: './modules/learn-observables/learn-observables.module#LearnObservablesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
