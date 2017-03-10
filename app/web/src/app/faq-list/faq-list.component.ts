import { Component, OnInit, Input, Output, SimpleChange} from '@angular/core';
import { FormsModule, FormControl }   from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Observable } from 'rxjs/Rx';

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
  
  faqs = [];
  entrada = new FormControl();
  
  constructor(private faqService:FaqService) {}

  ngOnInit() {
    this.update('');
    this.entrada.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe( data => this.update(data) )
  }


  update(value:any = '') {
    this.faqService.getFaqs(value).subscribe(
      faqs => this.faqs = faqs,
      err =>  console.error(err)
    );
  }
}
