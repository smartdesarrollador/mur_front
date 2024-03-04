import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2Component } from './post-2.component';

describe('Post2Component', () => {
  let component: Post2Component;
  let fixture: ComponentFixture<Post2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Post2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
