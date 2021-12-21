import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonResponsiveReorderedComponent } from './button-responsive-reordered.component';

describe('ButtonResponsiveReorderedComponent', () => {
  let component: ButtonResponsiveReorderedComponent;
  let fixture: ComponentFixture<ButtonResponsiveReorderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonResponsiveReorderedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonResponsiveReorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
