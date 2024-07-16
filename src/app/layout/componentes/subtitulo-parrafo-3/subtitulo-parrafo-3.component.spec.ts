import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloParrafo3Component } from './subtitulo-parrafo-3.component';

describe('SubtituloParrafo3Component', () => {
  let component: SubtituloParrafo3Component;
  let fixture: ComponentFixture<SubtituloParrafo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtituloParrafo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubtituloParrafo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
