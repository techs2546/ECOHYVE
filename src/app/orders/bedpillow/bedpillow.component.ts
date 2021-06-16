import { Component, OnInit,HostListener } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},  
];

@Component({
  selector: 'app-bedpillow',
  templateUrl: './bedpillow.component.html',
  styleUrls: ['./bedpillow.component.css']
})
export class BedpillowComponent implements OnInit {
  @HostListener('window:resize')
  my_func(){
   
    if (window.innerWidth<800){
    this.windows = window.innerWidth
    
  }
  else{
    this.mobile_view=false;
  }
}


  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  windows:any;
  id:any;
  items = [{'name':'suhail','no':1,'type':''}]
  items2 = [{'name':'suhail'}]
  type:any;
  count:number = 1;
  mobile_view = true;

  constructor() { 
    this.windows = window.innerWidth
    
  }
  add(){
   this.count = this.items[this.items.length-1]['no']+1 
   console.log(this.count)
    this.items.push({'name':'soul','no':this.count,'type':''})
    
  }
  remove(){
    if(this.items.length != 1){
    this.items.pop()}

  }
  add2(){
    this.items2.push({'name':'soul'})
    
  }
  remove2(){
    if(this.items2.length != 1){
    this.items2.pop()}

  }

  ngOnInit(): void {
  }

}
