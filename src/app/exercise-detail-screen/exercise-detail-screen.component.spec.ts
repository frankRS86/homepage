import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDetailScreenComponent } from './exercise-detail-screen.component';

describe('ExerciseDetailScreenComponent', () => {
  let component: ExerciseDetailScreenComponent;
  let fixture: ComponentFixture<ExerciseDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
