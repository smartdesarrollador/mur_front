import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionForm1Component } from './section-form-1.component';

describe('SectionForm1Component', () => {
  let component: SectionForm1Component;
  let fixture: ComponentFixture<SectionForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
