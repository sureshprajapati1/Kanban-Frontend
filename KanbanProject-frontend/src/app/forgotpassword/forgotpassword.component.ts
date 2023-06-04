import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ServiceService } from '../service/service.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  email: any;
  kanbanId:any;
mail:any;

  constructor(private fb: FormBuilder,private userService:UserService,private service:ServiceService, public dialoge: MatDialog,private authservice:AuthService,
    private routerService: Router, private mat: MatSnackBar) {
      this.service.kanbanId=this.kanbanId;
      this.service.getAllUser().subscribe(response =>{
      console.log(response)
      console.log(this.service.kanbanId);
      this.mail=response;
    
    })}

  forgotPasswordForm = this.fb.group({
   
    emailId: ['', [Validators.required, Validators.email]],
   
  });


  ngOnInit(): void {
    
  }

  get emailId(){return this.forgotPasswordForm.get("emailId")}

  getPassword(){
    console.log(this.emailId)
    this.email=this.forgotPasswordForm.value.emailId;
    this.userService.emailId=this.email;
    console.log(this.email)
    this.userService.getPassword(this.email).subscribe(response=>{
      console.log(response)
      
    })
    alert("email sent successfully")
    this.routerService.navigate(["login"])
  //   console.log(this.emailId)
  //   this.email=this.forgotPasswordForm.value.emailId;
  //   this.userService.emailId=this.email;
  //   console.log(this.email)
  //   for(let i = 0; i < this.mail.length; i++){
  //   if(this.email==this.mail[i]){
  //   this.userService.getPassword(this.email).subscribe(response=>{
  //     console.log(response)
  //     alert("email sent successfully")
      
  //   })
  // }else{
  //   alert("email id doesnot match")
  // }
  // }
  }

}