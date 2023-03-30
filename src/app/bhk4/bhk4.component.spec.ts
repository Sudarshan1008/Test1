import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bhk4Component } from './bhk4.component';

describe('Bhk4Component', () => {
  let component: Bhk4Component;
  let fixture: ComponentFixture<Bhk4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bhk4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bhk4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
