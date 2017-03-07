import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { Faq } from '../faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css'],
  providers: [
    FaqService
  ]
})
export class FaqListComponent implements OnInit {

  public faqs = [];
  
  constructor(private faqService:FaqService) {
    faqService.getFaqs().subscribe(
      faqs => this.faqs = faqs,
      err =>  console.error(err)
    );
  }

  ngOnInit() {
  }

}
