import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerApiServiceService } from '../customer-api-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
customerModifyForm!:FormGroup;
date = new Date() 
idValue:any
customerid:string


TrackingPhone(number:any):void {
  let value = this.customerModifyForm.get('CustomerName')?.value
  this.idValue= this.date.getFullYear().toString().slice(-2)+("0"+(this.date.getMonth()+1)).slice(-2)+value[0].toUpperCase()+value[value.length-1].toUpperCase()
 
  this.customerModifyForm.patchValue({
    CustomerId:this.idValue+ number.toString().slice(-5)
  })
}




TrackingName(data:string): void {
  if (data != ""){
    this.idValue= this.date.getFullYear().toString().slice(-2)+("0"+(this.date.getMonth()+1)).slice(-2)+data[0].toUpperCase()+data[data.length-1].toUpperCase()+this.customerModifyForm.get("CustomerPhone1")?.value.toString().slice(-5)
    this.customerModifyForm.patchValue({
    CustomerId:this.idValue
  })
  
}
else {
  this.customerModifyForm.patchValue({
    CustomerId:""
  })
  
}
}
  constructor(private router:Router,private spinner:NgxSpinnerService,private formBuilder:FormBuilder,private service :CustomerApiServiceService,private route:ActivatedRoute)
   {
    this.customerModifyForm = formBuilder.group(
      {
        CustomerName:['',Validators.required],
        CustomerId:new FormControl(),
        CustomerAddress:new FormControl(),
        CustomerPhone1:['',[Validators.maxLength(10),Validators.minLength(10),Validators.required]],
        CustomerPhone2:new FormControl(),
        CustomerLocationUrl:new FormControl(),
        CustomerTargetDate:['',Validators.required],
        CustomerEmail:['',[Validators.email]]
      });
    
    this.customerid = this.route.snapshot.params.id
    this.spinner.show();
    this.service.GetCustomerIdDetail(this.customerid).subscribe(data=>{
      this.spinner.hide();  
      
      
      this.customerModifyForm.setValue({
          CustomerName:data.CustomerName,
          CustomerId:data.CustomerId,
          CustomerAddress:data.CustomerAddress,
          CustomerPhone1:data.CustomerPhone1,
          CustomerPhone2:data.CustomerPhone2,
          CustomerLocationUrl:data.CustomerLocationUrl,
          CustomerTargetDate:data.CustomerTargetDate,
          CustomerEmail:data.CustomerEmail
        }
        )
    },
    error =>{
      this.spinner.hide()
      Swal.fire({
          
        title:'Failed to Load',
        text: 'Please verfiy customer existing in server',
        icon:'error',
        showClass: {popup: 'animate__animated animate__fadeInDown'},
        hideClass: {popup: 'animate__animated animate__fadeOutUp'}
      }).then((result)=>{
        
        this.router.navigateByUrl('customers');}
      )     
      
    })
    this.customerModifyForm.disable();
  }

    
  modifydata():void {
    this.customerModifyForm.enable();
  }
  deletedata():void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
    this.service.DeleteCustomerIdDetail(this.customerid).subscribe(data=>{
      this.spinner.hide();
      Swal.fire({
       
        icon: 'success',
        title: 'Your work has been done',
        showConfirmButton: false,
        timer: 1500
      }).then((result)=>{

        this.router.navigateByUrl('customers');

      })
    },
    error=>{
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Your work has not been done',
        showConfirmButton: false,
        timer: 1500
      }).then((result)=>{
        this.router.navigateByUrl('customers');
      })
    });
      }
    })
    
  }
    

  ngOnInit(): void {
  }

  on(url:string){
    this.router.navigateByUrl(url)
  }



  update():void{
    this.spinner.show();
    this.service.UpdateCustomerId(this.customerModifyForm.value,this.customerModifyForm.get("CustomerId")?.value).subscribe(
      data=>{
      this.spinner.hide();
      Swal.fire({
       
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then((result)=>{

        this.router.navigateByUrl('customers');

      })

    },
    error=>{
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: 'Your work has not been done',
        showConfirmButton: false,
        timer: 1500
      }).then((result)=>{
        this.router.navigateByUrl('customers');
      })
      
    })
  }


}
