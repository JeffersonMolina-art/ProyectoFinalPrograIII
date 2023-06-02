import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNameProductoComponent } from './search-name-producto.component';

describe('SearchNameProductoComponent', () => {
  let component: SearchNameProductoComponent;
  let fixture: ComponentFixture<SearchNameProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNameProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNameProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
