import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerApiServiceService } from '../customer-api-service.service';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm!:FormGroup;
  date = new Date() 
  idValue:any
  TrackingPhone(number:any):void {
  
    this.customerForm.patchValue({
      CustomerId:this.idValue+ number.toString().slice(-5)
    })
  }
  

  

  TrackingName(data:string): void {
    if (data != ""){
      this.idValue= this.date.getFullYear().toString().slice(-2)+("0"+(this.date.getMonth()+1)).slice(-2)+data[0].toUpperCase()+data[data.length-1].toUpperCase()
      this.customerForm.patchValue({
      CustomerId:this.idValue
    })
    
  }
  else {
    this.customerForm.patchValue({
      CustomerId:""
    })
    console.log(data)
  }
}
  constructor(private router:Router,private formBuilder:FormBuilder,private service :CustomerApiServiceService)
  {
    this.customerForm = formBuilder.group(
        {
          CustomerName:['',Validators.required],
          CustomerId:new FormControl(),
          CustomerAddress:new FormControl(),
          CustomerPhone1:['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]],
          CustomerPhone2:new FormControl(),
          CustomerLocationUrl:new FormControl(),
          CustomerTargetDate:['',Validators.required],
          CustomerEmail:['',[Validators.email]]
        }
      );

  }
  

  ngOnInit(): void {
  }

  on(url:string){
    this.router.navigateByUrl(url)
  }


  submit(){
    this.service.PostCustomerDetail(this.customerForm.value).subscribe(
      data =>{
        Swal.fire({title:"Success",text:'Your work has been saved',icon:'success',showConfirmButton: false,timer:1200}).then((result)=>{
          this.router.navigateByUrl('/customers');})
        
      },
      error=>{
        Swal.fire({title:"OOPS!",text:'Unable to add data',icon:'error',showConfirmButton: false,timer:1200})
          
        console.log(error)
      }
    )

      
      
    

  }

}
