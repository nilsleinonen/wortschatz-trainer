import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainierenComponent } from './trainieren.component';

describe('TrainierenComponent', () => {
  let component: TrainierenComponent;
  let fixture: ComponentFixture<TrainierenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainierenComponent]
    });
    fixture = TestBed.createComponent(TrainierenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
