import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
const S = require('string');

import { Faq } from '../faq';
import { FaqService } from '../faq.service';
import { isSlugValidation } from '../is-slug.directive';

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

  faqForm: FormGroup;
  slug = '';
  autoSlug = true;
  formErrors;
  cheditorconfig = {
    uiColor: '#FFFFFF',
    language: 'pt-br',
    skin: 'minimalist,/skins/minimalist/'
  };

  constructor(
    private faqService: FaqService,
    private cookie: CookieService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.faqForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      slug: ['', [Validators.required, isSlugValidation()]]
    });
    const {title} = this.faqForm.controls;
    title.valueChanges.subscribe( data => {
      this.mountSlug(data);
    });
  }

  getFormErrors(controlName, type) {
    const control = this.faqForm.get(controlName);
    if ( !control.touched ) {
      return false;
    }
    const avaiableErrors = control.errors;
    return avaiableErrors && !!avaiableErrors[type];
  }

  mountSlug(title) {
    this.slug = S(title).slugify().s;
    if ( this.autoSlug ) {
      (<FormControl>this.faqForm.controls['slug']).setValue(this.slug);
    }
  }

  autoSlugToggle() {
    this.autoSlug = !this.autoSlug;
    if (this.autoSlug) {
      this.mountSlug( this.faqForm.controls['title'].value );
    }
  }

  submit(event) {
    console.log(this.faqForm.valid);
    if ( this.faqForm.valid ) {

      this.faqService.createFaq(this.faqForm.value, this.cookie.get('authorization_token'))
        .subscribe(
          resp => console.log(resp),
          err => console.error(err)
        );
    }
  }

}
