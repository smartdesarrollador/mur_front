import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloParrafo4Component } from './subtitulo-parrafo-4.component';

describe('SubtituloParrafo4Component', () => {
  let component: SubtituloParrafo4Component;
  let fixture: ComponentFixture<SubtituloParrafo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtituloParrafo4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtituloParrafo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
