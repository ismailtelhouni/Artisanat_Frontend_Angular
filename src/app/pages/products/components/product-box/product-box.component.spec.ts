import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxComponent } from './product-box.component';

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBoxComponent]
    });
    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
