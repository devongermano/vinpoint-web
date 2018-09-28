import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingNewWorkgroupComponent } from './onboarding-new-workgroup.component';

describe('OnboardingNewWorkgroupComponent', () => {
  let component: OnboardingNewWorkgroupComponent;
  let fixture: ComponentFixture<OnboardingNewWorkgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingNewWorkgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingNewWorkgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
