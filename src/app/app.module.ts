import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomersComponent } from './customers/customers.component';
import { HelpComponent } from './help/help.component';
import { MessageComponent } from './message/message.component';
import { SettingComponent } from './setting/setting.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { OrdersComponent } from './orders/orders.component';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { BedpillowComponent } from './orders/bedpillow/bedpillow.component';
import { SofacushionComponent } from './orders/sofacushion/sofacushion.component';
import { NetlonComponent } from './orders/netlon/netlon.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerApiServiceService } from './customers/customer-api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { ViewCustomerComponent } from './customers/view-customer/view-customer.component';
import { AssignOrderComponent } from './orders/assign-order/assign-order.component';
import { OrderApiServiceService } from './orders/order-api-service.service';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexComponent,
    CustomersComponent,
    HelpComponent,
    MessageComponent,
    SettingComponent,
    AddCustomerComponent,
    OrdersComponent,
    BedpillowComponent,
    SofacushionComponent,
    NetlonComponent,
    ViewCustomerComponent,
    AssignOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule

    
  

  ],
  providers: [CustomerApiServiceService,
              OrderApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
