import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Faq } from './faq';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FaqService {

  constructor(private http: Http) { }

  getFaqs() : Observable<Faq[]> {
    return this.http.get('http://localhost:3000/api/v1/faq')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
