import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const S = require('string');

import { Faq } from '../faq';
import { FaqService } from '../faq.service';
import { isSlugValidation } from '../is-slug.directive';
import { wordsValidation } from '../words.directive';

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
  tags: Array<String> = [];

  constructor(
    private faqService: FaqService,
    private cookie: CookieService,
    private fb: FormBuilder
  ) {
    this.createForm();
    this.getTags();
  }

  ngOnInit() {}

  createForm() {
    this.faqForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      tags: ['', [Validators.required, wordsValidation(2)]],
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
    if ( this.faqForm.valid ) {
      this.faqService.createFaq(this.faqForm.value, this.cookie.get('authorization_token'))
        .subscribe(
          resp => console.log(resp),
          err => console.error(err)
        );
    }
  }

  getTags() {
    this.faqService.getTags().subscribe(
      tags => this.tags = tags.data
    );
  }

  addTag(tag, input) {
    input.value += ` ${tag._id}`;
    return false;
  }

}
