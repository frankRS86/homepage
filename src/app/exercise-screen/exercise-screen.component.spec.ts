import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseScreenComponent } from './exercise-screen.component';

describe('ExcerciseScreenComponent', () => {
  let component: ExerciseScreenComponent;
  let fixture: ComponentFixture<ExerciseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
