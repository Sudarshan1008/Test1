import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstResidentialComponent } from './const-residential.component';

describe('ConstResidentialComponent', () => {
  let component: ConstResidentialComponent;
  let fixture: ComponentFixture<ConstResidentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstResidentialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
