import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerComponent } from './planner.component';

describe('PlannerComponent', () => {
  let component: PlannerComponent;
  let fixture: ComponentFixture<PlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// unit test that should create planner component
  it('should create planner component', () => {
    expect(component).toBeTruthy();
  });
});

