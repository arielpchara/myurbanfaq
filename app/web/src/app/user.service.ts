import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

// source
  private isLogged: Subject<any> = new Subject();
// stream
  public isLogged$ = this.isLogged.asObservable();

  constructor(private http: Http) {
    this.isLogged$.subscribe(service => console.log('service', service));
  }

  login(email: string, password: any): Observable<any> {
    return this.http.post(
        'http://localhost:3000/api/v1/user/authenticate',
        {email, password}
      )
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  checkIsLogged(data) {
    if ( data.success && data.token) {
      this.isLogged.next(true);
    }
    this.isLogged.complete();
    return data;
  }


}
