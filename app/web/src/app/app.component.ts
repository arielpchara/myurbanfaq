import { Component, OnDestroy } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
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
  
}
