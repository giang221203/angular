import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  carts : any = [];
  totalQuantity : number = this.app.getCartTotalQuantity()
  totalPrice : number = this.app.getCartTotalPrice()
  constructor(private app: ProductService){}

  ngOnInit(): void {
    this.carts = this.app.GetCarts();
  }
  subTotal(cart :any){
    return cart.quantity * cart.price;

  }
  updateQuatity(idx :number,ev :any){
    let newQuatity = parseInt(ev.target.value);
    newQuatity = newQuatity > 0 ? newQuatity : 1;
    newQuatity = newQuatity <=100 ? newQuatity : 100;
    ev.target.value = newQuatity
    this.carts[idx].quantity = newQuatity
    this.app.saveCarts(this.carts);
    this.totalQuantity  = this.app.getCartTotalQuantity()
    this.totalPrice  = this.app.getCartTotalPrice()
  }

  giamSl(idx :number,qtt :any){
    let newQuatity = parseInt(qtt) - 1;
    newQuatity = newQuatity > 0 ? newQuatity : 1;
    this.carts[idx].quantity = newQuatity;
    this.app.saveCarts(this.carts);
    this.totalQuantity  = this.app.getCartTotalQuantity()
    this.totalPrice  = this.app.getCartTotalPrice()
  }
  tangSl(idx :number,qtt :any){
    let newQuatity =  parseInt(qtt) + 1;
    newQuatity = newQuatity <=100 ? newQuatity : 100;
    this.carts[idx].quantity = newQuatity;
    this.app.saveCarts(this.carts);
    this.totalQuantity  = this.app.getCartTotalQuantity()
    this.totalPrice  = this.app.getCartTotalPrice()
  }
  removecart(idx :number){
    if(confirm('Xóa khỏi giỏ hàng')){
      this.carts.splice(idx,1);
    this.app.saveCarts(this.carts);
    this.totalQuantity  = this.app.getCartTotalQuantity()
    this.totalPrice  = this.app.getCartTotalPrice()
    }
  }
}
