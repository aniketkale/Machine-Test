import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CustomerComponent }      from './customers/customers.component';
import {MatSidenavModule} from '@angular/material';
import {MatSortModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { ViewustomerComponent } from './viewustomer/viewustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatSortModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerComponent,
    MainNavComponent,
    UpdatecustomerComponent,
    ViewustomerComponent,
    AddcustomerComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
