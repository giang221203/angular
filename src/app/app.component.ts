import { Component } from '@angular/core';
import { User } from './cammon/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user :User = {
    name :"Giang",
    age:33,
    address:'Viet Nam'
  }
}
