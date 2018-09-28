import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingGetStartedComponent } from './onboarding-get-started.component';

describe('OnboardingGetStartedComponent', () => {
  let component: OnboardingGetStartedComponent;
  let fixture: ComponentFixture<OnboardingGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
