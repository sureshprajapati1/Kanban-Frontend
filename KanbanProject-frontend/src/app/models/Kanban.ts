import { Status } from "./Status";

export class Kanban{
 
 kanbanId!:number;
 kanbanTitle!:string;
 status:Status[]=[];
 emailId!:string;
 members!:string[];

 constructor(kanbanTitle:string,members:string[]){
this.kanbanTitle=kanbanTitle;
    this.members=members;
}
 }

