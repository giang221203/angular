import { Component } from '@angular/core';
import { User } from '../../cammon/user';
import { Product } from '../../cammon/product';
import products from '../../datas/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  first: number = 5;

  rows: number = 5;
  products: any;
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data.datas;
    }, error => console.log(error.message))
}
onPageChange($event :any) {

}
}