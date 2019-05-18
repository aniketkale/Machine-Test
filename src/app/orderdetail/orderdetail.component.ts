import { Component, OnInit } from '@angular/core';
import { DatashareServiceService }  from '../datashare-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  OrderData:any;
  constructor(public sharedService:DatashareServiceService, private location: Location) {

  
   }

  ngOnInit() {
    this.OrderData = this.sharedService.getOrderData();
  }


  goBack(): void {
    this.location.back();
  }
}
