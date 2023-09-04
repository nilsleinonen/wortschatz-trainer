import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErfassenComponent } from './erfassen.component';

describe('ErfassenComponent', () => {
  let component: ErfassenComponent;
  let fixture: ComponentFixture<ErfassenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErfassenComponent]
    });
    fixture = TestBed.createComponent(ErfassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
