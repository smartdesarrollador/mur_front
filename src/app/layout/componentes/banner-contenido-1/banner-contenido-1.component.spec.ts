import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContenido1Component } from './banner-contenido-1.component';

describe('BannerContenido1Component', () => {
  let component: BannerContenido1Component;
  let fixture: ComponentFixture<BannerContenido1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerContenido1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerContenido1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
