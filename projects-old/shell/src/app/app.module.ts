import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MfeRoutingService } from './mfe/mfe-routing.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { LoadFragmentsComponent } from './mfe/load-fragments/load-fragments.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    LoadFragmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (mfeRoutingService: MfeRoutingService) => () =>
      mfeRoutingService.init(),
      deps: [MfeRoutingService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
