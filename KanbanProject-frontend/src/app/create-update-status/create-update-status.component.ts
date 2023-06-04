import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service/service.service';



@Component({
  selector: 'app-create-update-status',
  templateUrl:'./create-update-status.component.html',
  // templateUrl: './create-update-status.component.html',
  styleUrls: ['./create-update-status.component.css']
})
export class CreateUpdateStatusComponent implements OnInit {

  constructor(private services: ServiceService, public dialogRef: MatDialogRef<CreateUpdateStatusComponent>) { }

  status:any;
  ArrayOfList:any;
  newStatus: any = {};
  count: number = 0;
  stat:any;
  statusTitle:any

  ngOnInit(): void 
  {
    this.stat= this.services.statusData;
    console.log("old status");
    
    console.log(this.stat);
  
  }


  statusUpdate()
  {
    console.log("new status");
 
    let oldStatusTitle = this.stat.statusTitle;
    this.stat.statusTitle=this.statusTitle;
    console.log(this.statusTitle);
    console.log(oldStatusTitle);

   this.services.updateStatus(this.services.kanbanId, oldStatusTitle, this.stat).subscribe(response=>
    console.log(response))

  }

  // setNull()
  // {
  //   this.statusForm.patchValue({
  //     statusId: this.stat.statusId,
  //     statusName: "",
  //     spaceName: this.stat.spaceName,
  //     email: this.stat.email,
  //   })

  // }

}
