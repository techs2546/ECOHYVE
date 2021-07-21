import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  on(url:string){
    this.router.navigateByUrl(url)
  }


}
