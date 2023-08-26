import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderMfeComponent } from './microfrontends/header-mfe/header-mfe.component';

import { FooterMfeComponent } from './microfrontends/footer-mfe/footer-mfe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMfeComponent,
    FooterMfeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
