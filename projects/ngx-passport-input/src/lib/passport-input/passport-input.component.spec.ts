import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportInputComponent } from './passport-input.component';

describe('PassportInputComponent', () => {
  let component: PassportInputComponent;
  let fixture: ComponentFixture<PassportInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassportInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassportInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
