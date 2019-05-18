import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Interface }         from '../interface';
import { CustomerService }  from '../customer.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: [ './customer-detail.component.css' ]
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Interface;

  customerId:any;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
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
      .subscribe(hero => this.customer = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }



}
