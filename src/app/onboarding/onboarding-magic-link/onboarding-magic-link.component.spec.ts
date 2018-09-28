import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingMagicLinkComponent } from './onboarding-magic-link.component';

describe('OnboardingMagicLinkComponent', () => {
  let component: OnboardingMagicLinkComponent;
  let fixture: ComponentFixture<OnboardingMagicLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingMagicLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingMagicLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
