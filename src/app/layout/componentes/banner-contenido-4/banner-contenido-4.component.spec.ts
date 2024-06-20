import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContenido4Component } from './banner-contenido-4.component';

describe('BannerContenido4Component', () => {
  let component: BannerContenido4Component;
  let fixture: ComponentFixture<BannerContenido4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerContenido4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerContenido4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
