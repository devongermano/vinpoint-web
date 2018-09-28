import { NgModule } from '@angular/core';
import {OnboardingGetStartedComponent} from './onboarding-get-started/onboarding-get-started.component';
import { OnboardingComponent } from './onboarding.component';
import {OnboardingNewWorkgroupComponent} from './onboarding-new-workgroup/onboarding-new-workgroup.component';
import {OnboardingExistingWorkgroupComponent} from './onboarding-existing-workgroup/onboarding-existing-workgroup.component';
import {AppRoutingModule} from '../app-routing.module';
import { OnboardingMagicLinkComponent } from './onboarding-magic-link/onboarding-magic-link.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    OnboardingGetStartedComponent,
    OnboardingNewWorkgroupComponent,
    OnboardingExistingWorkgroupComponent,
    OnboardingComponent,
    OnboardingMagicLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class OnboardingModule { }
