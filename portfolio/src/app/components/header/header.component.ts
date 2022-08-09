import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';
import { PERSON } from 'src/emptys';
import { Person } from 'src/interfaces';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  personData:Person=PERSON;
  myError:any = 0;
  edit:boolean = false;
  user:string = "";
  password:string = "";
  loginModal:boolean=false;
  changePassModal:boolean=false;
  showMessageModal:boolean=false;
  message:string = "";
  oldPass:string = "";
  newPass:string = "";
  newPass2:string = "";
  

  constructor(private servBackend:BackendService,
              ) { }
  

  ngOnInit(): void {
    this.servBackend.readPerson().subscribe(
      {
        next: (data) =>{
          this.personData=data[0];
        },
        error: (error) =>{
          this.myError = error;
        }
      }
    )
  }

  showLoginModal(){
    this.loginModal=true;
  }

  closeLoginModal(){
    this.loginModal=false;
  }

  onClickLogin():void{
    this.edit= this.validatePass(this.user, this.password);
  }

  validatePass(user:string, password:string):boolean
  {
    console.log("user: "+this.personData.user + " == " + user);
    console.log("pass: "+this.personData.password + " == " + password);
    if((this.personData.user == this.user) && (this.personData.password == password))  //plain text password
    {                  
      Swal.fire("Access grant");
      return true;
    }
    else
    {
      Swal.fire("Access denied");
      return false;
    }
  }

  onClickLogout(){
    this.edit=false
    this.user="";
    this.password="";
  }


  //function to enable edit and delete icons
  editable():boolean{
    return this.edit;
  }

  showChangePass(){
    this.oldPass="";
    this.newPass="";
    this.newPass2="";
    this.changePassModal=true
  }

  onClickChangePass(){
    this.updatePass();
    this.closeChangePassModal();
  }

  closeChangePassModal(){
    this.changePassModal=false;
  }

  updatePass(){
    if(this.validatePass(this.user, this.oldPass)){
      console.log("oldpass is valid!");
      if(this.newPass==this.newPass2 && this.newPass != this.oldPass){
        console.log("np==np2 a& op!=np ");
        this.personData.password=this.newPass;
        this.servBackend.updatePerson(this.personData).subscribe({
          next: (data) =>{
            Swal.fire("Password updated!!");
          },
          error: (error)=>{
          }
        })
      }
      else {
        Swal.fire("Error: The OLD password cannot be the same as new password or the new password and confirmation does not match");
      }
    }
    else{
      Swal.fire("Error: User and password combination does not match");
    }
  }




}
