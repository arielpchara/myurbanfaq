import { Injectable } from '@angular/core';
import { Faq } from './faq';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class FaqService {

  constructor(private http: Http) { }

  getFaqs(value) : Observable<Faq[]> {
    return this.http.get(`/api/v1/faq?q=${value}`)
    .throttleTime(500)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  createFaq(data, authorization) : Observable<Faq> {
    return this.http.post(
      '/api/v1/faq', data, {headers:new Headers({'x-access-token': authorization})})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))

  }

}
