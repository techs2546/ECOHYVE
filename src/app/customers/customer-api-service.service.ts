import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiServiceService {
  base_url = "http://192.168.1.36:8000/customer/"   
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})


  constructor(private http:HttpClient) { }
  
  GetCustomerDetail():Observable<any>{
    return this.http.get(this.base_url + "customer-form/",{headers:this.httpHeaders} )
  }

}