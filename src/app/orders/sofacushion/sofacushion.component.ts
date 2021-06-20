import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sofacushion',
  templateUrl: './sofacushion.component.html',
  styleUrls: ['./sofacushion.component.css']
})
export class SofacushionComponent implements OnInit {
id:string='';
count:number = 1;
 fileName = '';
items = [{'no':1,'type':''}]
  constructor() { }

  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);
        
    }
}

add(){
  this.count = this.items[this.items.length-1]['no']+1 
   console.log(this.count)
    this.items.push({'no':this.count,'type':''})

}
remove(){
  if(this.items.length != 1){
    this.items.pop()}
}

  ngOnInit(): void {
  }

}
