import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Subject } from 'rxjs/Subject';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService,
    CookieService
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  public login = {
    email: '',
    passowrd: ''
  };

  private subs;

  constructor(private userService: UserService, private cookie: CookieService ) {
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
          this.cookie.put('authorization_token', done.token);
          this.userService.checkIsLogged(done);
        },
        err => console.error(err)
      );
    }
  }

}
