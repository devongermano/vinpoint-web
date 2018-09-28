import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {OnboardingModule} from './onboarding/onboarding.module';
import { MainComponent } from './main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {MnFullpageModule} from 'ngx-fullpage';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
