import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsExchangesComponent } from './returns-exchanges.component';

describe('ReturnsExchangesComponent', () => {
  let component: ReturnsExchangesComponent;
  let fixture: ComponentFixture<ReturnsExchangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnsExchangesComponent]
    });
    fixture = TestBed.createComponent(ReturnsExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
