import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  respdata:any;
  @Output() 
  loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(private fb: FormBuilder,private userService:UserService,private authService:AuthService,  public dialoge: MatDialog,private authservice:AuthService,private routerService: Router, private mat: MatSnackBar) {}

  loginForm = this.fb.group({
   
    emailId: ['', [Validators.required,, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
   
  });


  ngOnInit(): void {
    
  }

  get emailId(){return this.loginForm.get("email")}
  get password(){return this.loginForm.get("password");}

  login(){
    this.userService.login(this.loginForm.value).subscribe(
      response=>{
        // console.log(response);
       
        this.respdata=response;
        if(this.respdata.message=="user logged in successfully"){
          this.authservice.isLoggedIn=true
        
        console.log(this.respdata.token);
        localStorage.setItem('userName',this.loginForm.get("emailId")?.value+"")
        localStorage.setItem('jwttoken',this.respdata.token)
        localStorage.setItem('isLoggedIn','true')
        this.authService.login();
        this.loggedIn.emit(true);
        this.routerService.navigate(["DashBoard"])
        this.mat.open('user loggedIn successfull','success',{
          duration:1000,
          panelClass:['mat-toolbar','mat-primary']
        });

      }
     
    },error=>{
      alert("Invalid Credentials")
      console.log(error);
    })
    ;

  }

getPassword(){
this.emailId==localStorage.getItem("userName");
 this.dialoge.open(ForgotpasswordComponent,{
  
      width:'350px',
      
      })
}

  }





