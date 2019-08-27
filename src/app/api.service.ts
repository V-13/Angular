import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  insertData(data){
    return this.http.post("http://angular-info.herokuapp.com/read",data);
  }
}
