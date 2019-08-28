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


  getData(){
    return this.http.get("http://angular-info.herokuapp.com/viewAPI");
  }

  searchData(data)
  {
    return this.http.post("http://angular-info.herokuapp.com/searchAPI",data);
  }

  deleteData(data)
  {
    return this.http.post("http://angular-info.herokuapp.com/deleteAPI",data);
  }
  updateData(data)
  {
    return this.http.post("http://angular-info.herokuapp.com/userupdate",data)
  }
}
