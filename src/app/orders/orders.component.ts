import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout'
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  constructor(private router:Router,private observer:BreakpointObserver) { }
  on(url:string){
    this.router.navigateByUrl(url)
  }


  ngOnInit(): void {
  }

}
