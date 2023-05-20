import { Component } from '@angular/core';
import { User } from '../cammon/user';
import { Product } from '../cammon/product';
import products from '../datas/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = products
}
