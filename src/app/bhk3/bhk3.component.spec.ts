import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bhk3Component } from './bhk3.component';

describe('Bhk3Component', () => {
  let component: Bhk3Component;
  let fixture: ComponentFixture<Bhk3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bhk3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bhk3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
