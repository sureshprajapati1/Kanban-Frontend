import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent {
  kanbanId:any;
  emailId:any;
  
  email:any;
  
  constructor(private service:ServiceService){
   
    this.kanbanId=this.service.kanbanId;
  
    this.service.getAllMembersInKanban(this.kanbanId).subscribe(response =>{
      console.log(response)
      console.log(this.service.kanbanId);
      this.email=response;
    
    })
  }
  
  deleteMemberinkanban(){
    console.log(this.service.kanbanId);
  this.email=this.service.email;
  
    this.kanbanId=this.service.kanbanId;
    this.service.deleteMemberinkanban(this.kanbanId,this.emailId).subscribe(reponse =>{
      console.log(reponse)
    })
  }
}