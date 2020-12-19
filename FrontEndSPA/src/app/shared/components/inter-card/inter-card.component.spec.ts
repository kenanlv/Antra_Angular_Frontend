import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCardComponent } from './inter-card.component';

describe('InterCardComponent', () => {
  let component: InterCardComponent;
  let fixture: ComponentFixture<InterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
