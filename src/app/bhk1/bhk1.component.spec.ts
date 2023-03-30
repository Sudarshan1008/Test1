import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bhk1Component } from './bhk1.component';

describe('Bhk1Component', () => {
  let component: Bhk1Component;
  let fixture: ComponentFixture<Bhk1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bhk1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bhk1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
