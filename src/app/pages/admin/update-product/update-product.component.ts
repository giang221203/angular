import { Component } from '@angular/core';
import { Product } from 'src/app/cammon/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  products:any;
  productForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    price: [0],
    description:[""],
    images :[""]
  });
  constructor (
    private formBuilder : FormBuilder,
    private productSevice :ProductService,
    private Router :Router,
    private router :ActivatedRoute
    ){
      this.router.paramMap.subscribe((params) => {
        this.id = String(params.get("id"));
      
      this.productSevice.getProductById(this.id).subscribe(product =>{
        this.products = product.datas
        console.log(product.datas);
        
          
        this.productForm.patchValue({
          name: product.datas.name,
          price: product.datas.price,
          description: product.datas.description,
          images: product.datas.images,
        });
      })
    })
  }

  id!: string

onHandleSubmit(){
  if (this.productForm.valid) {
    // Khi nhấn submit, khởi tạo sẵn giá trị cho product lấy từ form người dùng nhập hoặc để default value
    const product: any = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || "",
      images: this.productForm.value.images || "",

    };

    this.productSevice.updateProduct(product, this.id).subscribe((product) => {
      alert(`Cập nhật sản phẩm thành công: ${this.products.name}`);
      this.Router.navigateByUrl("/admin/product");
      // console.log("product", product);
    });
  }
}
}