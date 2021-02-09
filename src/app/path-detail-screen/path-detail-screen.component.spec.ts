import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathDetailScreenComponent } from './path-detail-screen.component';

describe('PathDetailScreenComponent', () => {
  let component: PathDetailScreenComponent;
  let fixture: ComponentFixture<PathDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
