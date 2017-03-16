import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
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

}
