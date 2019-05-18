import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DatashareServiceService }  from '../datashare-service.service';

import { Interface }         from '../interface';
import { CustomerService }  from '../customer.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  @Input() customer: Interface;

  customerId:any;
  customers: any;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    public sharedService:DatashareServiceService,
    private location: Location
  ) {
this.customerId =  +this.route.snapshot.paramMap.get('id');

console.log("customerId",this.customerId)
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe((customer) => {
        this.customer = customer;
        this.customers = customer.array; 
        console.log("Hero Object", this.customers)
      }, (error) => {
      });
  }

  goBack(): void {
    console.log("orders",this.customer)
    this.location.back();
  }

 save(): void {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }

  btnClick = function (customer) {
    console.log("clickheroObject",customer)
    this.sharedService.setOrderData(customer);
    this.router.navigate(['/orderdetail/'+customer.id]);
};
  delete(customer: Interface): void {
    console.log("gero")
    this.customerService.deleteCustomer(customer)
    .subscribe(() => this.goBack());
  }
}
