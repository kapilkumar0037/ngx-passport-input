import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPassportInputComponent } from './ngx-passport-input.component';

describe('NgxPassportInputComponent', () => {
  let component: NgxPassportInputComponent;
  let fixture: ComponentFixture<NgxPassportInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPassportInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPassportInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
