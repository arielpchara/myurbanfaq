import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  login(email:string, password:any = '') : Observable<any> {
    console.log(JSON.stringify({email, password}));
    return this.http.post(
        'http://localhost:3000/api/v1/user/authenticate',
        JSON.stringify({email, password}), {headers:this.header}
      )
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
