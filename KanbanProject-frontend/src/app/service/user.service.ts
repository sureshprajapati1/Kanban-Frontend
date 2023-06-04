import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  emailId:any;
  name:any;
  address:any;
   phoneNumber:any;
   file:any;

  constructor(private httpClient:HttpClient) { }
  
  Url:string="http://localhost:9999/login"
  


  saveUser(user:any){
   
    return this.httpClient.post(this.Url+"/registeruser",user)
  }
  
  login(user:any){
   
    return this.httpClient.post(this.Url+"/logincheck",user)
  }

  UpdateRegisterUserDetails(emailId:any, name:any, address:any, phoneNumber:any, file:any){
    let params = new FormData();
    params.append('emailId',emailId);
    params.append('name',name);
    params.append('address',address);
   params.append('phoneNumber',phoneNumber);
    params.append('file',file);
    return this.httpClient.post(`http://localhost:8888/kanbandetails/updateregisterUserDetails`,params)
  }
  

  getPassword(emailId:any){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwttoken')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.get(`http://localhost:9999/login/getpassword2/${emailId}`,requestOptions)
  }
}
