import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstVillaComponent } from './const-villa.component';

describe('ConstVillaComponent', () => {
  let component: ConstVillaComponent;
  let fixture: ComponentFixture<ConstVillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstVillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
