import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  statusTitle: any;
  newTask: any;
  kanbanId: any;
  taskShow: number=0;
  kanban: any;
  constructor(private service:ServiceService){}

  
  saveTask(){
   
  //   console.log(this.statusTitle)
  //   this.newTask.assignTo=this.service.assignTo;

  //   this.service.addTask(this.kanbanId,this.statusTitle,this.newTask).subscribe(response=>{
  //     console.log(response);
  //    this.taskShow =0;
  //    console.log("inside save task"+this.newTask)
  //     this.getStatus(this.kanban)
  //   })
  
   }
  

}
