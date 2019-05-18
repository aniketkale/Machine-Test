import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CustomerComponent }      from './customers/customers.component';
import { UpdatecustomerComponent }  from './updatecustomer/updatecustomer.component';
import { ViewustomerComponent }  from './viewustomer/viewustomer.component';
import { AddcustomerComponent }  from './addcustomer/addcustomer.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'update/:id', component: UpdatecustomerComponent },
  { path: 'view/:id', component: ViewustomerComponent },
  { path: 'add', component: AddcustomerComponent },
  { path: 'customers', component: CustomerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
