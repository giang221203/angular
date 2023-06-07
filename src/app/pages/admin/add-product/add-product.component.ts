import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/cammon/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  products:Product = {
    name: '',
    price: 0,
    description:'',
    images:''
  };
  constructor (private productSevice :ProductService,private Router :Router){
    
  }
  onSubmit() {
    console.log('Login submitted:', this.products);
    this.productSevice.addProduct(this.products).subscribe(data => {
      alert("Thêm sản phẩm thành công")
      this.Router.navigateByUrl("/admin/product");
      console.log(data)
    })
  }
}
