import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/cammon/product';
// import products from 'src/app/datas/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    products:any;
    
    constructor (
      private productService:ProductService,
    
      ){  }
    ngOnInit(): void {
      
      this.productService.getProducts().subscribe(data =>{
        this.products = data.datas;
        console.log(data.datas);
        
      },error =>console.log(error.message))
    }

    removeItem(id :string){
      const giang = confirm("Bạn muốn xóa chứ")
      if(giang){
        this.productService.deleteProduct(id).subscribe(res=>{   
          console.log(res);
            this.products = this.products.filter((item:any) => item._id !== id)
        })
      }
  
    }
   
}
