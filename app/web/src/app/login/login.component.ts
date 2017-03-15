import { Component, OnInit, Output } from '@angular/core';
import { AuthTokenService } from '../auth-token.service';
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
export class LoginComponent implements OnInit {

  public login = {
    email: '',
    passowrd: ''
  }
  _onAutenticated;

  constructor(private userService: UserService, private authToken:AuthTokenService ) { }


  ngOnInit() {
  }

  submit(form) {
    if( form.valid ) {
      this.userService.login( this.login.email, this.login.passowrd ).subscribe(
        done => this.authToken.setToken(done.token),
        err => console.error(err)
      );
    }
  }

}
