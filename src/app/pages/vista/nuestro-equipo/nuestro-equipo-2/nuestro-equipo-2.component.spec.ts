import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipo2Component } from './nuestro-equipo-2.component';

describe('NuestroEquipo2Component', () => {
  let component: NuestroEquipo2Component;
  let fixture: ComponentFixture<NuestroEquipo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroEquipo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroEquipo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
