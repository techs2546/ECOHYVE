import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerApiServiceService } from './customer-api-service.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerData:any
  constructor(private router:Router, private CustomerServices:CustomerApiServiceService) 
  { 
    this.CustomerServices.GetCustomerDetail().subscribe(
      data =>{
                this.customerData= data
             },
      error=>{
                console.log('Not Able to Fetch Data')
              }
    );      
  }

  

  on(url:string){
    this.router.navigateByUrl(url)
  }

  ngOnInit(): void {
  }

}
