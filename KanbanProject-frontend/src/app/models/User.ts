export class User{


emailId!:string;
name !:string;
password!:string;

constructor(emailId:string,name:string,password:string){
    this.emailId=emailId;
    this.name=name;
    this.password=password;

}
}