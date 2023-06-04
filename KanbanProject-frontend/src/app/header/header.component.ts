import { Component, Input } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Input()
  loggedIn: boolean = false;
  constructor(private authService: AuthService,
    private routerService: RouteService) {
  }

loggedin(){
  // console.log(localStorage.getItem('jwttoken'))
  return localStorage.getItem('isLoggedIn')
  
}

  logout() {
    this.authService.isLoggedIn = false
    localStorage.clear();
  }

}
