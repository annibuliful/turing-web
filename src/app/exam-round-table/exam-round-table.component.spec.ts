import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRoundTableComponent } from './exam-round-table.component';

describe('ExamRoundTableComponent', () => {
  let component: ExamRoundTableComponent;
  let fixture: ComponentFixture<ExamRoundTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRoundTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRoundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
