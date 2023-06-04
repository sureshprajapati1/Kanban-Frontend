import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
 
kanbanId:any;
emailId:any;

email:any;

constructor(private service:ServiceService){
 


this.service.getAllUser().subscribe(response =>{
  console.log(response)
  console.log(this.service.kanbanId);
  this.email=response;

})
}

AddMembersInKanban(){
  console.log(this.service.kanbanId);
this.email=this.service.email;

  this.kanbanId=this.service.kanbanId;
  this.service.AddMembersInKanban(this.kanbanId,this.emailId).subscribe(reponse =>{
    console.log(reponse)
  })
}








}
