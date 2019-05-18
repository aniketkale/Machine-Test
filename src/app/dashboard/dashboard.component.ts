import { Component, OnInit } from '@angular/core';
import { Interface } from '../interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  Customers: Interface[] = [];

  constructor(private heroService: CustomerService) { }

  ngOnInit() {
  }

 
}
