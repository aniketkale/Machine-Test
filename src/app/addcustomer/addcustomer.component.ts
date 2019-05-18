import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Interface } from '../interface';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  heroes: Interface[];
  state$: Observable<object>;
  sub:any;
  page:any;
  constructor(private customerService: CustomerService,private location: Location,public activatedRoute: ActivatedRoute) { }

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
    .subscribe(heroes => 
      this.heroes = heroes
      );
    
  }

  add(name: string,email:string,mobile:number,address:string): void {
    console.log("name",name,email,mobile,address)
    name      = name.trim();
    email     = email.trim();
    mobile    = mobile;
    address   = address.trim();
    if (!name) { 
      return alert("Please Enter Name")
     }
    if (!email) { 
      return alert("Please Enter Email")
     }
    if (!mobile) { 
      return alert("Please Enter Mobile")
    }
    if (!address) { 
      return alert("Please Enter address")
    }
    this.customerService.addCustomer({ name,email,mobile,address } as Interface)
      .subscribe(hero => {
        this.goBack()
      });
  }

  goBack(): void {
    this.location.back();
  }

  delete(hero: Interface): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.customerService.deleteCustomer(hero).subscribe();
  }


}
