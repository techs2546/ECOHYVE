import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OrderApiServiceService } from '../order-api-service.service';
import { Component, OnInit,Inject } from '@angular/core';
import { DialogData } from 'src/app/customers/customers.component';
import { NgxSpinnerService } from 'ngx-spinner';

import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-assign-order',
  templateUrl: './assign-order.component.html',
  styleUrls: ['./assign-order.component.css']
})
export class AssignOrderComponent implements OnInit {
  CustomerData:any
  isloaded:boolean=false;
  constructor(public dialogRef: MatDialogRef<AssignOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private Service:OrderApiServiceService ,private spinner:NgxSpinnerService) {
      this.spinner.show();
      this.Service.GetCustomerDetail(this.data.Id).subscribe(
        
        data=>{
          this.spinner.hide();
                this.CustomerData = data;
                this.isloaded = true
              },
  
        error=>{
          this.spinner.hide();
                  console.log(error)
                }
    
      );

     }

  toppings = new FormControl();
  toppingList: string[] = ['Bed', 'Pillow', 'Sofa', 'Cushion', 'Netlon'];

   

  ngOnInit(): void {
  }




}
