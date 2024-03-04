import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaLaboralComponent } from './oferta-laboral.component';

describe('OfertaLaboralComponent', () => {
  let component: OfertaLaboralComponent;
  let fixture: ComponentFixture<OfertaLaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfertaLaboralComponent]
    });
    fixture = TestBed.createComponent(OfertaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
