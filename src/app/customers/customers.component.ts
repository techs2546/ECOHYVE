import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AssignOrderComponent } from '../orders/assign-order/assign-order.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomerApiServiceService } from './customer-api-service.service';
import { NgxSpinnerService } from "ngx-spinner";

export interface DialogData {
  dialogControl: any;
  Id:string
}


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerData:any
  constructor(private router:Router,private spinner :NgxSpinnerService, public dialog: MatDialog,private CustomerServices:CustomerApiServiceService) 
  { 
    this.spinner.show();
    this.CustomerServices.GetCustomerDetail().subscribe(
      data =>{
                this.customerData= data
                this.spinner.hide();
             },
      error=>{
        this.spinner.hide();  
        Swal.fire({
          
          title:'Failed to Load',
          text: 'Unable to fetch data  from server. Contact Administrator!!!',
          icon:'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
                console.log('Not Able to Fetch Data')
              }
    );      
  }

  

  on(url:string){
    this.router.navigateByUrl(url)
  }

  ngOnInit(): void {
  }

  openDialog(id:string): void {
    const dialogRef = this.dialog.open(AssignOrderComponent, {
      width: '1500px',height:'500px',
      data: {Id:id,dialogControl:this.dialog}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
          });
  }


}
