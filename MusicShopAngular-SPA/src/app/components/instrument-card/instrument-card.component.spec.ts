import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentCardComponent } from './instrument-card.component';

describe('InstrumentCardComponent', () => {
  let component: InstrumentCardComponent;
  let fixture: ComponentFixture<InstrumentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentCardComponent]
    });
    fixture = TestBed.createComponent(InstrumentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
