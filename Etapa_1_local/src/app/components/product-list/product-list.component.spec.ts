import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { of, throwError } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ProductService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should show a message when there are no products', () => {
    spyOn(productService, 'getProducts').and.returnValue(of([])); 
    component.loadProducts();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Nenhum produto disponível.');
  });

  
  it('should display an error message if unable to contact API', () => {
    spyOn(productService, 'getProducts').and.returnValue(throwError({ status: 500 }));
    component.loadProducts();
    fixture.detectChanges();
    expect(component.products.length).toBe(0); 
    expect(component.errorMessage).toBeTruthy(); 
  });

  
  it('should filter products by name', () => {
    component.products = [
      { id: 1, name: 'Produto A', description: '', price: 10, stock: 100 },
      { id: 2, name: 'Produto B', description: '', price: 20, stock: 200 }
    ];
    component.searchTerm = 'Produto A';
    component.searchUser(); 
    expect(component.filteredProducts.length).toBe(1); 
    expect(component.filteredProducts[0].name).toBe('Produto A');
  });
});
