import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Interface }         from '../interface';
import { CustomerService }  from '../customer.service';
@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  @Input() customer: Interface;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) {

    
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {

  if (!this.customer.name) { 
   return alert("Please Enter Name")

  }
  if (!this.customer.email) { 
    return alert("Please Enter Email")
   }
  if (!this.customer.mobile) {
     return alert("Please Enter Mobile number"); 
    }
  if (!this.customer.address) { 
    return alert("Please Enter Address"); ; 
  }
    this.customerService.updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }
}
