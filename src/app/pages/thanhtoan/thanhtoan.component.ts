import {
  Component,
  OnInit
} from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.scss']
})
export class ThanhtoanComponent implements OnInit   {
    carts : any = [];
    totalQuantity : number = this.app.getCartTotalQuantity()
    totalPrice : number = this.app.getCartTotalPrice()
    constructor(private app :ProductService){}
  public payPalConfig ? : IPayPalConfig;

  ngOnInit(): void {
      this.initConfig();
  }

  private initConfig(): void {
      this.payPalConfig = {
          currency: 'EUR',
          clientId: 'sb',
          createOrderOnClient: (data) => < ICreateOrderRequest > {
              intent: 'CAPTURE',
              purchase_units: [{
                  amount: {
                      currency_code: 'EUR',
                      value: '9.99',
                      breakdown: {
                          item_total: {
                              currency_code: 'EUR',
                              value: '9.99'
                          }
                      }
                  },
                  items: [{
                      name: 'Enterprise Subscription',
                      quantity: '1',
                      category: 'DIGITAL_GOODS',
                      unit_amount: {
                          currency_code: 'EUR',
                          value: '9.99',
                      },
                  }]
              }]
          },
          advanced: {
              commit: 'true'
          },
          style: {
              label: 'paypal',
              layout: 'vertical'
          },
          onApprove: (data, actions) => {
              console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.order.get().then((details:any) => {
                  console.log('onApprove - you can get full order details inside onApprove: ', details);
              });

          },
          
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);
       

          },
          onError: err => {
              console.log('OnError', err);
       
          },
          onClick: (data, actions) => {
              console.log('onClick', data, actions);
           
          }
      };
  }
}