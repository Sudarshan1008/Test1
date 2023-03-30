import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstApartmentComponent } from './const-apartment.component';

describe('ConstApartmentComponent', () => {
  let component: ConstApartmentComponent;
  let fixture: ComponentFixture<ConstApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstApartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
