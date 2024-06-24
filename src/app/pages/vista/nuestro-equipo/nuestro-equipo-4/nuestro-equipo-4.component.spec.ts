import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipo4Component } from './nuestro-equipo-4.component';

describe('NuestroEquipo4Component', () => {
  let component: NuestroEquipo4Component;
  let fixture: ComponentFixture<NuestroEquipo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroEquipo4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroEquipo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
