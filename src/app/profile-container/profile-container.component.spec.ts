import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContainerComponent } from './profile-container.component';

describe('ProfileContainerComponent', () => {
  let component: ProfileContainerComponent;
  let fixture: ComponentFixture<ProfileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// unit test that tests if the component was create successfully
  it('should create profile container component', () => {
    expect(component).toBeTruthy();
  });
});
