
import { AuthTokenService } from '../auth-token.service';
import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Subject } from 'rxjs/Subject';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService,
    AuthTokenService
  ]
})
export class LoginComponent implements OnDestroy {

  public login = {
    email: '',
    passowrd: ''
  }
  _onAutenticated;


  private subs;

  constructor(private userService: UserService, private cookie: CookieService, private authToken:AuthTokenService ) {
    this.subs = this.userService.isLogged$.subscribe( l => console.log('login', l) );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submit(form) {
    if ( form.valid ) {
      this.userService.login( this.login.email, this.login.passowrd ).subscribe(
        done => {
          this.authToken.setToken(done.token)
          this.cookie.put('authorization_token', done.token);
          this.userService.checkIsLogged(done);
        },
        err => console.error(err)
      );
    }
  }

}
