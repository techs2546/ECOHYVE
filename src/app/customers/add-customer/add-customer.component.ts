import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  }

  on(url:string){
    this.router.navigateByUrl(url)
  }

  submit(){
    Swal.fire({title:"Success",text:'Your work has been saved',icon:'success',showConfirmButton: true}).then((result)=>{
      if (result.isConfirmed){
      this.router.navigateByUrl('/customers')  
      }})

  }

}
