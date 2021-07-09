import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcchartComponent } from './btcchart.component';

describe('BtcchartComponent', () => {
  let component: BtcchartComponent;
  let fixture: ComponentFixture<BtcchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtcchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
