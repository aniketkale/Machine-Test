import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareServiceService {

  orderData;
  constructor(){
    this.orderData= {};
  }
  setOrderData(val: object){
    this.orderData= val;
  }
  getOrderData(){
    return this.orderData;
  }
}
