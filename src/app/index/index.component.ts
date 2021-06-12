import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'ECOHYVE';
  opened = true;
  mobile = false;
  over = 'over';
  

  constructor() {
    if (window.screen.availWidth <= 720){
      this.mobile = true;
      this.opened  = false;
  
    }
   }
  


  Width(value: any){
  if( value != 'none'){
    this.title = value;
  }
  if (window.screen.availWidth <= 720){
    return true;
  }
  else{
    return false;
  }
}



  ngOnInit(): void {
  }

}
