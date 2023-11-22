import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareInstructionComponent } from './care-instruction.component';

describe('CareInstructionComponent', () => {
  let component: CareInstructionComponent;
  let fixture: ComponentFixture<CareInstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareInstructionComponent]
    });
    fixture = TestBed.createComponent(CareInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
