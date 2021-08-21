import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivefundComponent } from './receivefund.component';

describe('ReceivefundComponent', () => {
  let component: ReceivefundComponent;
  let fixture: ComponentFixture<ReceivefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
