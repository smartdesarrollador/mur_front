import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContenido3Component } from './banner-contenido-3.component';

describe('BannerContenido3Component', () => {
  let component: BannerContenido3Component;
  let fixture: ComponentFixture<BannerContenido3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerContenido3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerContenido3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
