import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipo3Component } from './nuestro-equipo-3.component';

describe('NuestroEquipo3Component', () => {
  let component: NuestroEquipo3Component;
  let fixture: ComponentFixture<NuestroEquipo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroEquipo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestroEquipo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
