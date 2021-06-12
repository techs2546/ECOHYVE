import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private router:Router) { }
  on(url:string){
    this.router.navigateByUrl(url)
  }

  ngOnInit(): void {
  }

}
