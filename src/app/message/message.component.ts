import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  id:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',id:2},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',id:3},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',id:4},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',id:5},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',id:6},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',id:7},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',id:8},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',id:9},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',id:10},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',id:11},
];
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router:Router) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','id'];
  dataSource = ELEMENT_DATA;
  on(url:string){
    this.router.navigateByUrl(url)

  }

  placing_order(){
    
    this.router.navigateByUrl('orders');
    
  }

  ngOnInit(): void {
  }

}
