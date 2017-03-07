import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { Faq } from '../faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-create',
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.css'],
  providers: [
    FaqService,
    CookieService
  ]
})
export class FaqCreateComponent implements OnInit {

  public faq = {
    title: '',
    content: ''
  };

  constructor(private faqService:FaqService, private cookie:CookieService) { }

  ngOnInit() {
  }

  submit(form) {
    if( form.valid ) {
      this.faqService.createFaq(
        this.faq,
        this.cookie.get('authorization_token')
      ).subscribe(
        done => console.log(done),
        err => console.error(err)
      );
    }
  }

}
