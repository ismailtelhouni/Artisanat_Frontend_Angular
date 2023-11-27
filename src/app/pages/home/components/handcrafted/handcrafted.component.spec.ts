import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandcraftedComponent } from './handcrafted.component';

describe('HandcraftedComponent', () => {
  let component: HandcraftedComponent;
  let fixture: ComponentFixture<HandcraftedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandcraftedComponent]
    });
    fixture = TestBed.createComponent(HandcraftedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
