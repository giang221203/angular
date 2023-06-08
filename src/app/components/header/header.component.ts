import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
totalQuantity:number = 0;
account :any;
constructor(private app :ProductService,private data :DataService){

}
ngOnInit(): void {
  this.app.getCartTotalQuantity()

}
}
