import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { FaqCreateComponent } from './faq-create/faq-create.component';
import { FaqComponent } from './faq/faq.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    FaqListComponent,
    LoginComponent,
    FaqCreateComponent,
    FaqComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
