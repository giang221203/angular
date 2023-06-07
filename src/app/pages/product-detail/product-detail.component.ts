import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  products:any = {
    name: '',
    price: 0,
    description:'',
    images:''
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    // Observable
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.products = product.datas;
        console.log(product.datas);
        
      })
    })

  }
}
