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
import { CustomersComponent } from './customers/customers.component';
import { HelpComponent } from './help/help.component';
import { MessageComponent } from './message/message.component';
import { SettingComponent } from './setting/setting.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IndexComponent,
    CustomersComponent,
    HelpComponent,
    MessageComponent,
    SettingComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
