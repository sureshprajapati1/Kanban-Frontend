import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  file:File | undefined;
    profile:any ={};
    emailId:any;
    address:any;
    name:any;
    
  phoneNumber:any;
  user:any={};
  userDetail:any;





  
    constructor(private service: UserService,private services:ServiceService,private fb: FormBuilder) 
    {
      this.services.getUserDetail().subscribe(response=>{
        this.userDetail=response;
        console.log(this.userDetail)
      })
    }

    ngOnInit(): void 
    {
    this.emailId = localStorage.getItem("userName");
      console.log(this.emailId);
      
    }


   
  
    UpdateRegisterUserDetails()
  {
   this.name= this.userDetail.name,
   this.phoneNumber= this.userDetail.phoneNumber,
   this.address= this.userDetail.address,
console.log(this.name)
     this.service.UpdateRegisterUserDetails(this.emailId,this.name,this.address,this.phoneNumber,this.file).subscribe((person: any)=>{
        
        this.profile = person;
      
        console.log(person);
      
      })
alert("Profile updated")

  }

  onChange(event:any) {
    this.file=event.target.files[0]
    // this.userForm.patchValue({image:event.target.files[0]})
    // this.userForm.get('image')?.updateValueAndValidity();
}
    }
  