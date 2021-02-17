import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http : HttpClient) { }
  getData(){
    
    return this.http.get('https://mgsecurity.herokuapp.com/getalllogs');
  }
  getUsers(){
    return this.http.get('https://mgsecurity.herokuapp.com/getalluser');
  }
  postVehicle(user){
    return this.http.post('https://mgsecurity.herokuapp.com/addvechileno',user);
  }
  createUser(user){
    return this.http.post('https://mgsecurity.herokuapp.com/createuser',user);
  }
}
