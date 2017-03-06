import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService
  ]
})
export class LoginComponent implements OnInit {

  public login = {
    email: '',
    passowrd: ''
  }

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

  submit(form) {
    if( form.valid ) {
      this.userService.login( this.login.email, this.login.passowrd ).subscribe(
        done => console.log(done),
        err => console.error(err)
      );
    }
  }

}
