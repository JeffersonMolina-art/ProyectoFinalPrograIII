import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryProductComponent } from './search-category-product.component';

describe('SearchCategoryProductComponent', () => {
  let component: SearchCategoryProductComponent;
  let fixture: ComponentFixture<SearchCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCategoryProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
