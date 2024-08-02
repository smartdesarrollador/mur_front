import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasNoticiasComponent } from './mas-noticias.component';

describe('MasNoticiasComponent', () => {
  let component: MasNoticiasComponent;
  let fixture: ComponentFixture<MasNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
