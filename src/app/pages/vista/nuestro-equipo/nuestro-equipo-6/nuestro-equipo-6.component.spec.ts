import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipo6Component } from './nuestro-equipo-6.component';

describe('NuestroEquipo6Component', () => {
  let component: NuestroEquipo6Component;
  let fixture: ComponentFixture<NuestroEquipo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroEquipo6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroEquipo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
