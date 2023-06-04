
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CreateUpdateStatusComponent } from '../create-update-status/create-update-status.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { MembersComponent } from '../members/members.component';
import { AssignedComponent } from '../assigned/assigned.component';
import { DeleteMemberComponent } from '../delete-member/delete-member.component';
import { UserService } from '../service/user.service';
import { ProfileComponent } from '../profile/profile.component';
import { DeleteAssignedComponent } from '../delete-assigned/delete-assigned.component';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

userDetail:any;

  constructor(private httpclient: HttpClient, private breakpointObserver: BreakpointObserver,private fb:FormBuilder, private snackBar: MatSnackBar, private router: Router,
     public dialoge: MatDialog, private service:ServiceService,private userService:UserService) { this.GetKanbanByMembers();
      this.service.getUserDetail().subscribe(response=>{
        this.userDetail=response;
        console.log(this.userDetail)
      })

    }

Kanbans: any;
guestKanbans:any;
kanban: any = {};
updatekanban: any = {};
kanbanId:any;

emailId:any;
 
status:any[]=[];
Status:any;
statusTitle:any;


ArrayOfList:any[]=[]
taskObject:any = {}

tasks: any []= [];
newTask: any = {};
assignTo:any[]=[];

currentDate=new Date();

show:boolean=false;
num1:number=0;
kanbanShow=0;
taskShow: number = 0;
num: number = 0;
editStatus: boolean = false;
checkGuest:boolean = false;
  ngOnInit() 
  { 
    this.emailId =localStorage.getItem("userName");
    console.log(this.emailId)
    this.service.getKanbanByEmail().subscribe(data => {
      this.Kanbans = data;
      console.log(data);
    },
      error => {
        console.log(error);
      });

  }

  canDeactivate(){
    if(!this.editStatus) {
      let response = confirm("Changes are not saved. Do you still want to Leave?")
      return response;
    }
    else
      return true;
  }

saveKanban(){
  this.kanban.emailId = localStorage.getItem("userName");
  this.service.saveKanban(this.kanban).subscribe(data => {

    if (data == null) {
      alert("kanban already exist")
    }
    this.Kanbans={};
    this.kanbanShow==1;
    alert("New Kanban added")

  },
    error => {
      console.log(error);
      alert(error.error)

    })
    this.ngOnInit();
    this.ngOnInit();
}
changeShow(){
  this.show = true;

}

updateKanban(kanban:any){
  console.log(kanban)
  this.kanban.emailId = localStorage.getItem("userName");
this.service.updateKanban(kanban.kanbanId ,kanban).subscribe(

  response =>{console.log(response)
    alert("updated")
    this.show = false;
    this.ngOnInit();
   } 
) 


}

deleteKanban(kanban:any){
  console.log(kanban);
  if(confirm('do you want to delete?')){
  this.service.deleteKanban(kanban.kanbanId).subscribe(
    values =>{console.log(values)});

  alert("kanban deleted")
this.ngOnInit();
  }
}

openProfile(){
  this.userService.emailId = localStorage.getItem("userName");

  const dialRef = this.dialoge.open(ProfileComponent, {});
}




getStatus(kanban:any){
  this.kanbanId=kanban.kanbanId;
  this.kanban=kanban;
  console.log(kanban.kanbanId)
  this.service.getAllStatus(kanban.kanbanId).subscribe(response =>
    {
      console.log(kanban.kanbanId)
      console.log(response);
      this.status = []
      this.status = response;
      this.num=1;
      this.getAllTask(this.status);
    })
   

}

getStatus1(kan:any){
  this.kanbanId=kan.kanbanId;
  this.kanban=kan;
  console.log(kan.kanbanId)

  this.service.getAllStatus(kan.kanbanId).subscribe(response =>
    {
      console.log(kan.kanbanId)
      console.log(response);
      this.status = []
      this.status = response;
      this.num=1;
      this.getAllTask(this.status);
    })
   

}

showMenu(){
  this.num1=1;
}

updateStatus(s:any){
  this.service.statusData=s;
  this.service.kanbanId=this.kanbanId;
  console.log(this.service.kanbanId)
  this.dialoge.open(CreateUpdateStatusComponent,{

    width:'350px',
    
    })
  
}

deleteStatus(s:any){
  if(confirm('do you want to delete?')){
this.service.deleteStatus(this.kanbanId,s).subscribe(response=>{
  console.log(response);
  this.getStatus(this.kanban)
})
  }
}

createStatus(status:any){
this.service.addNewStatus(this.kanbanId,{'statusTitle':this.statusTitle}).subscribe(response=>{
  console.log(response);
this.getStatus(this.kanban)

})
}

viewStatusForm(){
  this.num = 2;
  this.ngOnInit();
}

cancelMethod()
{ this.num = 1;
  this.ngOnInit();}


  saveAssignee(assignTo:any){
    this.assignTo=assignTo;
  }

  nullValues(){}

addTask(s:any){
  this.taskShow = 1;
  this.statusTitle=s.statusTitle;
 }

 saveTask(){
  console.log(this.statusTitle)
  this.newTask.assignTo=this.service.assignTo;
 
  this.service.addTask(this.kanbanId,this.statusTitle,this.newTask).subscribe(response=>{
    console.log(response);
   this.taskShow =0;
   console.log("inside save task"+this.newTask)

    this.getStatus(this.kanban)
  })

 }

 saveTask2(){
  console.log(this.statusTitle)

  this.service.addTask(this.kanbanId,this.statusTitle,this.newTask).subscribe(response=>{
    console.log(response);
   this.taskShow =0;
   console.log("inside save task"+this.newTask)

    this.getStatus(this.kanban)
  })

 }


deleteTask(task:any){
  console.log(task.statusTitle);
  console.log(task)
  if(confirm('do you want to delete?')){
  this.service.deleteTask(this.kanbanId,task.statusTitle,task).subscribe(response=>{
    console.log(response);
    console.log(task);

    console.log("inside delete task"+task)
    this.getStatus(this.kanban)
  })
}


}

deleteTask1(task:any){
  console.log(task.statusTitle);
  console.log(task)
  alert('do you want to move')
  this.service.deleteTask(this.kanbanId,task.statusTitle,task).subscribe(response=>{
    console.log(response);
    console.log(task);

    console.log("inside delete task"+task)
    this.getStatus(this.kanban)
  })


}

updateTask(s:any){
  console.log(s)
    this.service.updatedTask = s;
    this.service.kanbanId=this.kanbanId;
    this.service.statusTitle=s.statusTitle;
    console.log(this.service.kanbanId)
    console.log(this.service.statusTitle)
    this.dialoge.open(UpdateTaskComponent,{
  
      width:'350px',
      
      })
  }


getAllTask(data:any){
  this.ArrayOfList = [];
  this.taskObject = {};
  console.log(data);
  console.log(this.status)
    for (let i = 0; i < this.status.length; i++) 
    {
      let taskByStatus: any = [];
      if(data[i].task==null || data[i].task.length===0 ||data[i].task==undefined){
        console.log("task -------->"+data[i].task)
       let task2:any={'statusTitle':data[i].statusTitle}
       taskByStatus.push(task2);
this.ArrayOfList.push(taskByStatus)
      }
      else{
      for (let j = 0; j < data[i].task.length; j++) 
      {
        {
          data[i].task[j].statusTitle=this.status[i].statusTitle;
          let taskInStatus = data[i].task[j];
          // console.log(taskInStatus)
          taskByStatus.push(taskInStatus);
        }
      }
      console.log(taskByStatus)
      this.ArrayOfList.push(taskByStatus);
      console.log(this.ArrayOfList);
    }
    }
    this.tasks = data;

    this.ngOnInit();

  }

  
  isArray(item: any): boolean 
  {
    // console.log(item)
    if(!Array.isArray(item)){
      item=[]
    }
    return Array.isArray(item);

  }


  lengthOfArray(array:any){
    if(array.length===0){
      return 1;
    }else{
      return array.length;
    }

  }
  

  
drop(event: CdkDragDrop<any>) 
{
if(event.container.data===null){event.container.data=event.previousContainer.data}

  if (event.previousContainer === event.container) 
  {
    console.log("inside if");

    console.log(event.container.data);

    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
  else 
  {
    console.log("inside else");
    console.log(event)
    const oldstatusTitle = event.item.data.statusTitle
    console.log(event.container.data[0])
    this.newTask = {};

    this.newTask = event.item.data;
  
    this.statusTitle=event.container.data[0].statusTitle;
    this.saveTask2()
    let oldTask = new Object(event.item.data)
    console.log(this.newTask )
    
console.log(event.container.data)
    this.deleteTask1(oldTask)
  
    transferArrayItem(

      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

GetKanbanByMembers(){
  this.emailId =localStorage.getItem("userName");
console.log(this.emailId)
this.service.GetKanbanByMembers(this.emailId).subscribe(response => {
  console.log(response);
  this.guestKanbans=response;
})
}

getAllUser(){
this.service.kanbanId=this.kanbanId;
  console.log(this.service.kanbanId)
  const dialRef = this.dialoge.open(MembersComponent, {});
}

clickmethod(kanban:any){
  this.service.kanbanId=kanban.kanbanId;
  console.log(this.service.kanbanId)
  const dialRef = this.dialoge.open(MembersComponent, {});

}

deletemethod(kanban:any){
  this.service.kanbanId=kanban.kanbanId;
  console.log(this.service.kanbanId)
  const dialRef = this.dialoge.open(DeleteMemberComponent, {});
}


assignMethod(task:any){
  this.service.kanbanId=this.kanbanId;
  this.service.statusTitle=task.statusTitle
  console.log(this.service.statusTitle)
  this.service.taskTitle=task.taskTitle;
  console.log(this.service.taskTitle)
  const dialRef = this.dialoge.open(AssignedComponent, {});
  // this.getAllTask();

}
deleteMethod(task:any){
  this.service.kanbanId=this.kanbanId;
  this.service.statusTitle=task.statusTitle
  console.log(this.service.statusTitle)
  this.service.taskTitle=task.taskTitle;
  console.log(this.service.taskTitle)
  const dialRef = this.dialoge.open(DeleteAssignedComponent, {});
  // this.getAllTask();

}


}