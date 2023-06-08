import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../cammon/product';

let baseUrl = 'http://localhost:8088/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {    }  
    getProducts(search_key:any = null): Observable<any> {
      if(search_key != null){
        baseUrl += '&name_like='+search_key;
      }
      return this.http.get<any>(baseUrl);
    }
  
    getProductById(id:any): Observable<any> {
      return this.http.get<any>(`${baseUrl}/${id}`);
    }
  
    addProduct(product:any): Observable<any> {
      return this.http.post<any>(baseUrl, product);
    }
  
    updateProduct(product:any, id: string): Observable<any> {
      return this.http.put<any>(`${baseUrl}/${id}`, product);
    }
  
    deleteProduct(id:any): Observable<any> {
      return this.http.delete<any>(`${baseUrl}/${id}`);
    }
    GetCarts(){
      let cartJson = sessionStorage.getItem('cart');
      if(cartJson){
        return JSON.parse(cartJson)
      }else{
        return [];
      }
    }
    saveCarts(carts :any){
      let cartJson = JSON.stringify(carts)
      sessionStorage.setItem('cart',cartJson)
    }
    getCartTotalPrice(){
      let carts = this.GetCarts();
      let total : number  = 0;
      carts.forEach((item :any) => {
        total += item.quantity * item.price;
      });
      return total
    }

    getCartTotalQuantity(){
      let carts = this.GetCarts();
      let total : number  = 0;
      carts.forEach((item :any) => {
        total += item.quantity;
      });
      return total
    }
}
