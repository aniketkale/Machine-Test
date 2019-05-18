import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Interface }         from '../interface';
import { CustomerService }  from '../customer.service';

@Component({
  selector: 'app-viewustomer',
  templateUrl: './viewustomer.component.html',
  styleUrls: ['./viewustomer.component.css']
})
export class ViewustomerComponent implements OnInit {
  @Input() hero: Interface;

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
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.customerService.updateCustomer(this.hero)
      .subscribe(() => this.goBack());
  }


  delete(hero: Interface): void {
    this.customerService.deleteCustomer(hero)
    .subscribe(() => this.goBack());
  }
}
