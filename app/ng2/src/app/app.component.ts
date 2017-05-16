<<<<<<< HEAD
import { Component, OnDestroy } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { Subscription }   from 'rxjs/Subscription';
=======
import { Component } from '@angular/core';
import { UserService } from './user.service';
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
<<<<<<< HEAD
    AuthTokenService
  ]
})
export class AppComponent  implements OnDestroy {

  private isAuthenticated:Boolean = false;
  private _onAutenticated:Subscription;

  constructor(private authToken:AuthTokenService ) {
    this.login();
    this._onAutenticated = this.authToken.tokenChanged$.subscribe( value => {
      this.isAuthenticated = !!value;
    });
  };

  logout(e) {
    this.isAuthenticated = false;
    this.authToken.removeToken();
    return false;
  }

  login() {
    this.isAuthenticated = !!this.authToken.getToken();
  }

  ngOnDestroy() {
    this._onAutenticated.unsubscribe();
  }
  
=======
    UserService
  ]
})

export class AppComponent {

  constructor(private userService: UserService) {
    this.userService.isLogged$.subscribe( confirm => {
      console.log('app', confirm);
    } );
  }

  teste() {
    this.userService.checkIsLogged({success: true, token: '123'});
    return false;
  }

>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
}
