import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingGetStartedComponent } from './onboarding/onboarding-get-started/onboarding-get-started.component';
import { MainComponent } from './main/main.component';
import { OnboardingExistingWorkgroupComponent } from './onboarding/onboarding-existing-workgroup/onboarding-existing-workgroup.component';
import { OnboardingNewWorkgroupComponent } from './onboarding/onboarding-new-workgroup/onboarding-new-workgroup.component';
import {OnboardingMagicLinkComponent} from './onboarding/onboarding-magic-link/onboarding-magic-link.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'onboarding',
    component: OnboardingGetStartedComponent,
  },
  {
    path: 'onboarding/existing',
    component: OnboardingExistingWorkgroupComponent
  },
  {
    path: 'onboarding/new',
    component: OnboardingNewWorkgroupComponent
  }, {
    path: 'onboarding/magiclink',
    component: OnboardingMagicLinkComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
