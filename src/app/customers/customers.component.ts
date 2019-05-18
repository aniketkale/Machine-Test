import { Component, OnInit } from '@angular/core';

import { Interface } from '../interface';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-heroes',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Interface[];
  data: boolean = false;
  state$: Observable<object>;
  sub: any;
  page: any;
  customernameList: any;
  constructor(private customerService: CustomerService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 0;
      });

    console.log("active route", this.page)
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers =>
        this.customers = customers
      );

  }

  add(name: string, email: string, mobile: number): void {
    console.log("name", name, email, mobile)
    name = name.trim();
    if (!name) { return; }
    this.customerService.addCustomer({ name } as Interface)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  customerlist(customer) {
    console.log("customerList", customer)
    this.customernameList = customer;
    this.ordersArray = '';
    this.OrderData = '';
    this.orderarraydata = false;
  }
  ordersArray: any;
  orderarraydata:boolean = false;
  allorders(array) {
    console.log("allarrayList", array)
    if(array ==  undefined){
      this.orderarraydata = true;
    }else{
      this.ordersArray = array;
    }
  }

  OrderData: any;
  btnClick(data) {
    this.OrderData = data;
  }

  delete(customer: Interface): void {
    console.log("deletecustomer", customer)
    this.customers = this.customers.filter(h => h !== customer);
    this.customernameList = ''
    this.customerService.deleteCustomer(customer)
      .subscribe();
  }
}
