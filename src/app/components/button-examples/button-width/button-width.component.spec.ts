import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWidthComponent } from './button-width.component';

describe('ButtonWidthComponent', () => {
  let component: ButtonWidthComponent;
  let fixture: ComponentFixture<ButtonWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
