import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendadasComponent } from './recomendadas.component';

describe('RecomendadasComponent', () => {
  let component: RecomendadasComponent;
  let fixture: ComponentFixture<RecomendadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendadasComponent]
    });
    fixture = TestBed.createComponent(RecomendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
