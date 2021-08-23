import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderApiServiceService {
  base_url = "http://192.168.1.37:8000/customer/"   
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})


  constructor(private http:HttpClient) { }



  GetCustomerDetail(data:string):Observable<any>{
    
    return this.http.get(this.base_url + "customer-form/"+data,{headers:this.httpHeaders} )
  }

}
