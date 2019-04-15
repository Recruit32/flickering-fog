import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  show = false;

  constructor(public authService: AuthService) { }

  toggleCollapse() {
    this.show = !this.show;
  }
}