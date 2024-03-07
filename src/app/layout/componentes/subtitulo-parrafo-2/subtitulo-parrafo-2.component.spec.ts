import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloParrafo2Component } from './subtitulo-parrafo-2.component';

describe('SubtituloParrafo2Component', () => {
  let component: SubtituloParrafo2Component;
  let fixture: ComponentFixture<SubtituloParrafo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtituloParrafo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtituloParrafo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
