import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefungComponent } from './pruefung.component';

describe('PruefungComponent', () => {
  let component: PruefungComponent;
  let fixture: ComponentFixture<PruefungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruefungComponent]
    });
    fixture = TestBed.createComponent(PruefungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
