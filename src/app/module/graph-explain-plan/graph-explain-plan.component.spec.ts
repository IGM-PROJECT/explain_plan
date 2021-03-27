import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphExplainPlanComponent } from './graph-explain-plan.component';

describe('GraphExplainPlanComponent', () => {
  let component: GraphExplainPlanComponent;
  let fixture: ComponentFixture<GraphExplainPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphExplainPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphExplainPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
