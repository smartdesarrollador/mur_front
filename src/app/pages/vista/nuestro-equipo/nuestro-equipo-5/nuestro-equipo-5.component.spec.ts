import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipo5Component } from './nuestro-equipo-5.component';

describe('NuestroEquipo5Component', () => {
  let component: NuestroEquipo5Component;
  let fixture: ComponentFixture<NuestroEquipo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroEquipo5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroEquipo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
