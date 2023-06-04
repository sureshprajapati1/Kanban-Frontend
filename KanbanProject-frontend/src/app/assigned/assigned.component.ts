import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-assigned',
  templateUrl: './assigned.component.html',
  styleUrls: ['./assigned.component.css']
})
export class AssignedComponent {
  kanbanId:any;
  emailId:any;
  
  email:any;
statusTitle:any;
taskTitle:any;
userDetail:any;
  constructor(private service:ServiceService){
   
  this.kanbanId=this.service.kanbanId;
  
  this.service.getAllMembersInKanban(this.kanbanId).subscribe(response =>{
    console.log(response)
    console.log(this.service.kanbanId);
    this.email=response;
 
  })
  }
  
  addAssignmemberintask(){
    console.log(this.emailId)
    console.log(this.service.kanbanId);
    this.kanbanId=this.service.kanbanId;
    this.statusTitle=this.service.statusTitle;
    this.taskTitle=this.service.taskTitle;
   
    this.service.assignTo.push(this.emailId)
    
    this.service.addAssignmemberintask
    
    (this.kanbanId,this.statusTitle,this.taskTitle,this.emailId).subscribe(reponse =>{
      console.log(reponse)
      // window.location.reload();
    })
  }

  // deleteAssignmemberintask(){
  //   console.log(this.service.kanbanId);
  //   this.kanbanId=this.service.kanbanId;
  //   this.statusTitle=this.service.statusTitle;
  //   this.taskTitle=this.service.taskTitle;
  //   this.service.deleteAssignmemberintask.(this.emailId)
    
    
  // }
  
  
  
}
