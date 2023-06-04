import { Task } from "./Task";

export class Status{

statusId!:string;
statusTitle!:string;
taskLimit!:number;
 task!:Task[];

 constructor(statusTitle:string,taskLimit:number,task:Task[]){
    this.statusTitle=statusTitle;
    this.task=task;
    this.taskLimit=taskLimit;
  
}
}

