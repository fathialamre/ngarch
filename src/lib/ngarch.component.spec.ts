import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgarchComponent } from './ngarch.component';

describe('NgarchComponent', () => {
  let component: NgarchComponent;
  let fixture: ComponentFixture<NgarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgarchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
