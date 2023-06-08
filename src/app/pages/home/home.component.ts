import { Component } from '@angular/core';
import { User } from '../../cammon/user';
import { Product } from '../../cammon/product';
import products from '../../datas/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  p: number = 1;
  
  carts: any = this.productService.GetCarts();
  products: any;

  constructor(private productService: ProductService) {
    console.log(this.carts);
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.datas;
      },
      (error) => console.log(error.message)
    );
  }
  
 
  onAddTocart(products: any) {
    
    let idx = this.carts.findIndex((item: any) => {
      return (item.id == products._id);
    });
    if (idx >= 0) {
      this.carts[idx].quantity += 1;
    } else {
      let cartItem: any = {
        id: products._id,
        name: products.name,
        images:products.images,
        price: products.price,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity;
        },
      };
      this.carts.push(cartItem);
    }
    this.productService.saveCarts(this.carts);
    Swal.fire({
      title: 'Thêm vào giỏ hàng thành công',
      icon : 'success'
    })
  }
}
