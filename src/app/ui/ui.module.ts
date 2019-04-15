import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainNavComponent } from './main-nav/main-nav.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    MainNavComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class UiModule { }
