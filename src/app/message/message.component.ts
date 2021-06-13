import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router:Router) { }
  on(url:string){
    this.router.navigateByUrl(url)
  }

  ngOnInit(): void {
  }

}
