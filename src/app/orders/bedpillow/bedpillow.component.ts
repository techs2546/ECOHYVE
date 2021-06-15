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
   this.windows = window.innerWidth
    if (window.innerWidth<800){
    this.mobile_view = true;
    
    
  }}
  windows = 1234
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  items = [{'name':'suhail'}]
  mobile_view = true;

  constructor() { 
    this.windows = window.innerWidth
  }
  add(){
    this.items.push({'name':'soul'})
  }
  remove(){
    if(this.items.length != 1){
    this.items.pop()}

  }
  ngOnInit(): void {
  }

}
