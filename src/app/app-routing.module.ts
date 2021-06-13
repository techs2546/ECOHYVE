import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HelpComponent } from './help/help.component';
import { IndexComponent } from './index/index.component';
import { MessageComponent } from './message/message.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingComponent } from './setting/setting.component';
const routes: Routes = [
  
  
   {
     path:'orders',
     component:OrdersComponent
   },
  {
    path:'Dashboard',
    component:DashboardComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'customers/new',
    component:AddCustomerComponent
  },
  {
    path:'Message',
    component:MessageComponent
  },
  {
    path:'Setting',
    component:SettingComponent
  },
  {path:'Help',
component:HelpComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
