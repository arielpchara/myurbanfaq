import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    UserService
  ]
})
export class HeaderComponent implements OnInit {


  public isLogged: Boolean = false;

  constructor(private userService: UserService) {
    this.userService.isLogged$.subscribe( confirm => {
      console.log('header', confirm);
      this.isLogged = confirm;
    } );
  }

  ngOnInit() {
  }

  teste() {
    this.userService.checkIsLogged({success: true, token: '123'});
    return false;
  }

}
