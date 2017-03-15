import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthTokenService {
  
  private tokenChanged:Subject<string> = new Subject<string>();
  tokenChanged$ = this.tokenChanged.asObservable();

  constructor(private cookie:CookieService) {}

  setToken(token:string) {
    this.tokenChanged.next(token);
    this.cookie.put('authorization_token', token);
  }

  getToken() {
    return this.cookie.get('authorization_token');
  }

  removeToken() {
    this.tokenChanged.next(null);
    this.cookie.remove('authorization_token');
  }

}
