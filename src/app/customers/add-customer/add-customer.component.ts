import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    Swal.fire("Success",'Your work has been saved','success')
  }

}
