import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private productService: ProductService) { }

  login() {
    this.productService.login(this.username, this.password).subscribe(response => {
      this.productService.setToken(response.accessToken);  // Salvar o token
      console.log('Login bem-sucedido');
    }, error => {
      console.log('Erro no login');
    });
  }
}
