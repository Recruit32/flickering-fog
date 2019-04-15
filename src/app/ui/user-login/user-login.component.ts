import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  constructor(public auth: AuthService,
              private router: Router) { }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  private afterSignIn() {
    // do after login stuff here (router redirects, toast messages, etc.)
    return this.router.navigate(['/']);
  }
}