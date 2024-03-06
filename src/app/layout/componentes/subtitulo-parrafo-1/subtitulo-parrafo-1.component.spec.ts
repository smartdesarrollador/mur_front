import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloParrafo1Component } from './subtitulo-parrafo-1.component';

describe('SubtituloParrafo1Component', () => {
  let component: SubtituloParrafo1Component;
  let fixture: ComponentFixture<SubtituloParrafo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtituloParrafo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtituloParrafo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
