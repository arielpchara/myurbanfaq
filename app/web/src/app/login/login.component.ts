import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

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
export class LoginComponent implements OnInit {

  public login = {
    email: '',
    passowrd: ''
  }

  constructor(private userService: UserService, private cookie:CookieService ) { }

  ngOnInit() {
  }

  submit(form) {
    if( form.valid ) {
      this.userService.login( this.login.email, this.login.passowrd ).subscribe(
        done => this.cookie.put('authorization_token', done.token),
        err => console.error(err)
      );
    }
  }

}
