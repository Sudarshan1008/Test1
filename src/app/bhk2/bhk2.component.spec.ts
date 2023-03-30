import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bhk2Component } from './bhk2.component';

describe('Bhk2Component', () => {
  let component: Bhk2Component;
  let fixture: ComponentFixture<Bhk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bhk2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bhk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
