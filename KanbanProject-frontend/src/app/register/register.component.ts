import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit {
  file:File | undefined;
  constructor(private fb: FormBuilder,private userService:UserService,private routerService: Router, private mat: MatSnackBar) {}

  registerForm = this.fb.group({
    
    emailId: ['', [Validators.required,, Validators.email]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    phoneNumber:['',Validators.required],
   address:['',Validators.required],
   

  });


  ngOnInit(): void {
    
  }
  get emailId(){return this.registerForm.get("email")}
  get name(){return this.registerForm.get("UserName")}
  get password(){return this.registerForm.get("password");}
  get phoneNumber(){return this.registerForm.get("phoneNumber");}
  get address(){return this.registerForm.get("address");}
 

 saveUser(): void {
  console.log(this.registerForm.value);
  this.userService.saveUser(this.registerForm.value).subscribe(
    (    response: any)=>{
      console.log(response);
      
      this.routerService.navigate(["login"])
      this.mat.open('registered successfull','success',{
        duration:1000,
        panelClass:['mat-toolbar','mat-primary']
      });

    }, error=>{
      alert("User already exists")
      console.log(error);
    });
  
  //  this.registerForm.reset();
  }

//   onChange(event:any) {
//     this.file=event.target.files[0]
//     // this.userForm.patchValue({image:event.target.files[0]})
//     // this.userForm.get('image')?.updateValueAndValidity();
// }

}
