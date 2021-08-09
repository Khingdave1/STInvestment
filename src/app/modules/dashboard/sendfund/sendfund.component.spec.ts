import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfundComponent } from './sendfund.component';

describe('SendfundComponent', () => {
  let component: SendfundComponent;
  let fixture: ComponentFixture<SendfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
