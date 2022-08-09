import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USRPASS } from 'src/emptys';
import { UsrPass } from '../interfaces';
// import * as bcrypt from '../../../node_modules/bcrypt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private editEnabled:boolean = false;    //it was forced to true for testing porpouse only. 

  private urlUserPass:string = "../assets/data/userpass.json";
  private userData: UsrPass= USRPASS;

  //variables to generate the hash
    // const saltRounds = 8;
  

  constructor(private Http:HttpClient) { }


  isloged():boolean{
    return this.editEnabled;
  }
  
  setlogin(login:boolean){
    this.editEnabled = login;
  }

  // readUser():Observable<any>{
  //   return this.Http.get(this.urlUserPass);
  // }

    readUser():any{
    this.Http.get(this.urlUserPass).subscribe(
      {
        next: (data) =>{
          return data;
        },
        error:(error) =>{
          return error;
        }
      }
    );
  }

  updateUser(userData:any):Observable<any>{
    return this.Http.post<any>(this.urlUserPass,userData);
  }

  validatePass(user:string,password:string):boolean{
    this.userData = this.readUser();
    console.log("userData: "+this.userData);
    console.log("user: "+this.userData.hardUser + " == " + user);
    console.log("pass: "+this.userData.hardPass + " == " + password);
    if((this.userData.hardUser == user) && (this.userData.hardPass == password)){                   //plain text password
      console.log("Access grant");
      return (true);
    }
    else{
      console.log("Access denied");
      return(false);
    }

  }


  updatePassord(user:string, oldPass:string, newPass:string, newPass2:string):boolean{
    if(this.validatePass(user, oldPass)){
      console.log("oldpass is valid!");
      if(newPass==newPass2 && newPass != oldPass){
        console.log("np==np2 a& op!=np ");
        this.userData.hardPass=newPass;
        this.userData.hardUser=user
        this.Http.post<any>(this.urlUserPass, this.userData);
        return(true);
      }
    }
    return (false);
  }

  login(user:string, password:string){
    this.editEnabled = this.validatePass(user,password);  
    console.log(this.editEnabled); 
  }

  logout():boolean{
    this.editEnabled=false;
    return this.editEnabled;
  }

}