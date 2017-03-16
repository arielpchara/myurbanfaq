<<<<<<< HEAD
import { Component, OnInit, Output } from '@angular/core';
import { AuthTokenService } from '../auth-token.service';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Subject } from 'rxjs/Subject';

>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
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
export class LoginComponent implements OnInit, OnDestroy {

  public login = {
    email: '',
    passowrd: ''
<<<<<<< HEAD
  }
  _onAutenticated;

  constructor(private userService: UserService, private authToken:AuthTokenService ) { }

=======
  };

  private subs;

  constructor(private userService: UserService, private cookie: CookieService ) {
    this.subs = this.userService.isLogged$.subscribe( l => console.log('login', l) );
  }
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  submit(form) {
    if ( form.valid ) {
      this.userService.login( this.login.email, this.login.passowrd ).subscribe(
<<<<<<< HEAD
        done => this.authToken.setToken(done.token),
=======
        done => {
          this.cookie.put('authorization_token', done.token);
          this.userService.checkIsLogged(done);
        },
>>>>>>> 82d95fa59f826a94405c4ffd8db5eb3a6c18ef72
        err => console.error(err)
      );
    }
  }

}
