import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];  
  searchTerm: string = '';  
  errorMessage: string = '';  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
        this.filteredProducts = data;  
      },
      error => {
        this.errorMessage = 'Não foi possível carregar os produtos. Tente novamente mais tarde.';
      }
    );
  }

  searchUser() {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = this.products;  
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  deleteProduct(id: number | undefined) {
    if (id !== undefined) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();  
      });
    } else {
      console.error('ID do produto indefinido. Não foi possível deletar o produto.');
    }
  }
}
