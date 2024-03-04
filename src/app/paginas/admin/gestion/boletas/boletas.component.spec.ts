import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasComponent } from './boletas.component';

describe('BoletasComponent', () => {
  let component: BoletasComponent;
  let fixture: ComponentFixture<BoletasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletasComponent]
    });
    fixture = TestBed.createComponent(BoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
