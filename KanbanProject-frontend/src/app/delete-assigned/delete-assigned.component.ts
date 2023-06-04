import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-delete-assigned',
  templateUrl: './delete-assigned.component.html',
  styleUrls: ['./delete-assigned.component.css']
})
export class DeleteAssignedComponent {
  kanbanId:any;
  emailId:any;
  
  email:any;
statusTitle:any;
taskTitle:any;
  constructor(private service:ServiceService){
   
  this.kanbanId=this.service.kanbanId;
  this.statusTitle=this.service.statusTitle;
  this.taskTitle=this.service.taskTitle;
  console.log(this.kanbanId)
  console.log(this.statusTitle)
  console.log(this.taskTitle)
  this.service.getAllMembersaddToTask(this.kanbanId,this.statusTitle,this.taskTitle).subscribe(response =>{
    console.log(response)
    console.log(this.service.kanbanId);
    this.email=response;
  
  })
  }
  
  deleteAssignmemberintask(){
    console.log(this.emailId)
    console.log(this.service.kanbanId);
    this.kanbanId=this.service.kanbanId;
    this.statusTitle=this.service.statusTitle;
    this.taskTitle=this.service.taskTitle;
    this.service.assignTo.push(this.emailId)
    
    this.service.deleteAssignmemberintask
    
    (this.kanbanId,this.statusTitle,this.taskTitle,this.emailId).subscribe(reponse =>{
      console.log(reponse)
      // window.location.reload();
    })
  }


}
