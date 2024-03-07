import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContenido2Component } from './banner-contenido-2.component';

describe('BannerContenido2Component', () => {
  let component: BannerContenido2Component;
  let fixture: ComponentFixture<BannerContenido2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerContenido2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerContenido2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
