import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingExistingWorkgroupComponent } from './onboarding-existing-workgroup.component';

describe('OnboardingExistingWorkgroupComponent', () => {
  let component: OnboardingExistingWorkgroupComponent;
  let fixture: ComponentFixture<OnboardingExistingWorkgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingExistingWorkgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingExistingWorkgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
