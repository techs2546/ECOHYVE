import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OrderApiServiceService } from '../order-api-service.service';
import { Component, OnInit,Inject } from '@angular/core';
import { DialogData } from 'src/app/customers/customers.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-assign-order',
  templateUrl: './assign-order.component.html',
  styleUrls: ['./assign-order.component.css']
})
export class AssignOrderComponent implements OnInit {
  orderForm!:FormGroup;

  CustomerData:any
  orderid!:string
  isloaded:boolean=false;
  constructor(public dialogRef: MatDialogRef<AssignOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public Diadata: DialogData,private Service:OrderApiServiceService ,private spinner:NgxSpinnerService,private formBuilder:FormBuilder) {
      this.spinner.show();
      this.Service.GetCustomerDetail(this.Diadata.Id).subscribe(
        
        data=>{
          this.spinner.hide();
                this.CustomerData = data;
                this.isloaded = true
                this.OrderIdGenerator()
              },
  
        error=>{
          this.spinner.hide();
                  console.log(error)
                }
    
      );

      this.orderForm = formBuilder.group({
        CustomerId: new FormControl(),
        OrderId: new FormControl(),
        Category:['',Validators.required],
        OrderPartner:['',Validators.required]

      })

     }


     OrderIdGenerator():void {
      let date = new Date()
      let month =("0"+(date.getMonth()+1)).slice(-2)
      let day = ("0"+date.getDate()).slice(-2) 
      let contactrev = this.CustomerData.CustomerPhone1.toString().slice(-5)
       this.orderForm.patchValue({
         CustomerId:this.CustomerData.CustomerId,
         OrderId:day+"ECO"+month+contactrev
       })
     }

  category = new FormControl();
  categoryList: string[] = ['Bed', 'Pillow', 'Sofa', 'Cushion', 'Netlon'];

   

  ngOnInit(): void {
  }

  CloseOrder():void {
    this.dialogRef.close()
  }

  SubmitOrder():void{
    console.log(this.orderForm.value)
  }

}
