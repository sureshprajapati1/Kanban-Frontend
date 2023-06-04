
export class Task{

    taskId!:number;
    taskTitle!:string;
    taskContent!:string;
     priority!:number;
     assignTo!:string;
     StartDate!:number;
     endDate!:number;
     constructor(taskTitle:string,taskContent:string,StartDate:number,endDate:number,assignTo:string,priority:number){
        this.taskTitle=taskTitle;
        this.taskContent=taskContent;
        this.StartDate=StartDate;
        this.endDate=endDate;
        this.assignTo=assignTo;
        this.priority=priority;
    }
    }
