import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstCommercialComponent } from './const-commercial.component';

describe('ConstCommercialComponent', () => {
  let component: ConstCommercialComponent;
  let fixture: ComponentFixture<ConstCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
