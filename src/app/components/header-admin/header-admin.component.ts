import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent {
  products :any
  searchForm : FormGroup = new FormGroup({
    name : new FormControl()
  })
  constructor(private productsevice : ProductService){}
  onSearch(){
    alert(this.searchForm.value.name)
  }
}
