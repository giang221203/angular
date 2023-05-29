import { Component } from '@angular/core';
import products from 'src/app/datas/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    products = products
}
