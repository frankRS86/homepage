import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathScreenComponent } from './path-screen.component';

describe('PathScreenComponent', () => {
  let component: PathScreenComponent;
  let fixture: ComponentFixture<PathScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
