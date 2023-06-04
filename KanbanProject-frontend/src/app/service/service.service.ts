import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Kanban } from '../models/Kanban';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient : HttpClient, private router:Router) { }
  isLoggedIn: boolean=false;
  
  kanbanId:any;
  kanban:any[]=[]
  statusData:any;
  status:any={};
  updatedTask:any;
  email:any;
  statusTitle:any;
  taskTitle:any;
  assignTo:any[]=[];



  getUserDetail(){
    let httpHeader = new HttpHeaders({
      'Authorization':'Bearer '+localStorage.getItem('jwttoken')
    });
    let requestOptions = {headers : httpHeader};
    return this.httpClient.get("http://localhost:8888/kanbandetails/getuserdetails",requestOptions);
  }

saveKanban(data:any) {
  return this.httpClient.post("http://localhost:8888/kanbandetails/savenewkanban",data);
}

updateKanban(kanbanId:any, kanban:any){
   return this.httpClient.post(`http://localhost:8888/kanbandetails/updatekanban/${kanbanId}`,kanban);
}

deleteKanban(kanban:any) {
  
  return this.httpClient.delete(`http://localhost:8888/kanbandetails/deletekanban/${kanban}`);
 
}

getallKanban(){
 return this.httpClient.get("http://localhost:8888/kanbandetails/getallkanban");
}
getKanbanByEmail() {
  return this.httpClient.get(`http://localhost:8888/kanbandetails/getkanbanbyemail/${localStorage.getItem("userName")}`)
}


addNewStatus(kanbanId:any, status:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/addnewstatusintokanban/${kanbanId}`,status)

}
updateStatus(kanbanId:any,stausTitle:any, status:any){
  // return this.httpClient.post(`http://localhost:8888/kanbandetails/updatestatusintokanban/${kanbanId}`,status)
  return this.httpClient.post(`http://localhost:8888/kanbandetails/updatestatusintokanban/${kanbanId}/${stausTitle}`,status)
}
deleteStatus(kanbanId:any, status:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/deletestatusintokanban/${kanbanId}`,status)
}
getAllStatus(kanbanId:any){
  return this.httpClient.get<Array<any>>(`http://localhost:8888/kanbandetails/getallstatusbykanbanid/${kanbanId}`);
}

addTask(kanbanId:any, statusTitle:any, task:any){
   return this.httpClient.post(`http://localhost:8888/kanbandetails/addnewtaskintostatus/${kanbanId}/${statusTitle}`,task)
  }
deleteTask(kanbanId:any, statusTitle:any, task:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/deletetaskintostatus/${kanbanId}/${statusTitle}`,task)
}
updateTaskService(kanbanId:any, statusTitle:any,taskTitle:any,task:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/updatetaskintostatus/${kanbanId}/${statusTitle}/${taskTitle}`,task)
}
getAllTask(kanbanId:any, statusTitle:any){
  return this.httpClient.get<Array<any>>(`http://localhost:8888/kanbandetails/getalltaskbykanbanid/${kanbanId}/${statusTitle}`)
}

GetKanbanByMembers(emailId:any){
  console.log(emailId);
  return this.httpClient.get<Array<any>>(`http://localhost:8888/kanbandetails/getkanbanbymember/${emailId}`);
}

AddMembersInKanban(kanbanId:any,emailId:any){
  console.log(this.email)
  return this.httpClient.post(`http://localhost:8888/kanbandetails/addmemberinkanban/${kanbanId}/${emailId}`,null)
}

getAllUser(){
  return this.httpClient.get("http://localhost:8888/kanbandetails/getalluser");
}

getAllMembersInKanban(kanbanId:any){
  return this.httpClient.get(`http://localhost:8888/kanbandetails/getallmembersinkanban/${kanbanId}`);
}

deleteMemberinkanban(kanbanId:any,emailId:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/deletememberinkanban/${kanbanId}/${emailId}`,null)
}
addAssignmemberintask(kanbanId:any,statusTitle:any,taskTitle:any,emailId:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/addassignmemberintask/${kanbanId}/${statusTitle}/${taskTitle}/${emailId}`,null)
}
deleteAssignmemberintask(kanbanId:any,statusTitle:any,taskTitle:any,emailId:any){
  return this.httpClient.post(`http://localhost:8888/kanbandetails/deleteassignmemberintask/${kanbanId}/${statusTitle}/${taskTitle}/${emailId}`,null)
}

getAllMembersaddToTask(kanbanId:any,statusTitle:any,taskTitle:any){
  return this.httpClient.get(`http://localhost:8888/kanbandetails/getallmembersinassignto/${kanbanId}/${statusTitle}/${taskTitle}`)

}
}
