import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private services: ServiceService, private route:Router,public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateTaskComponent>) { }

    status:any;
    ArrayOfList:any;
    newStatus: any = {};
    count: number = 0;
    task:any;
    taskTitle:any;
    currentDate=new Date();
    updatedTaskForm:any;
    taskContent:any;

    priority:any;
    StartDate:any;
    endDate:any;
    ngOnInit(): void 
    {
     
      this.task= this.services.updatedTask;
      this.taskContent=this.task.taskContent;
      this.taskTitle=this.task.taskTitle;
      this.priority=this.task.priority;
      this.StartDate=this.task.StartDate;
      this.endDate=this.task.endDate;

      console.log("old task");
      
      console.log(this.task);
    
    }
    range = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
    });
  
    updatedTask()
    {
      console.log("new task");
   
      let oldtaskTitle = this.task.taskTitle;
      this.task.taskTitle=this.taskTitle;

      console.log(this.taskTitle);
      console.log(oldtaskTitle);
  this.task.taskContent=this.taskContent;
  this.task.priority=this.priority;
  console.log(this.priority)
  this.task.StartDate=this.range.get('start')?.value
  console.log(this.StartDate)
  this.task.endDate=this.range.get('end')?.value
  console.log(this.endDate)
     this.services.updateTaskService(this.services.kanbanId, this.services.statusTitle, oldtaskTitle, this.task).subscribe((response: any)=>
      console.log(response))
  
    }

}
