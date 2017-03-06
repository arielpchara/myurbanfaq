import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FaqListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
