import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USRPASS } from 'src/emptys';
import { UsrPass } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private editEnabled:boolean = false;    //it was forced to true for testing porpouse only. 

  private urlUserPass:string = "../assets/data/userpass.json";
  private userData: UsrPass= USRPASS;


  constructor(private Http:HttpClient) { }


  isloged():boolean{
    return this.editEnabled;
  }
  
  setlogin(login:boolean){
    this.editEnabled = login;
  }

    readUser():any{

  }

  updateUser(userData:any):Observable<any>{
    return this.Http.post<any>(this.urlUserPass,userData);
  }

  validatePass(user:string,password:string):boolean{
      return(false);

  }


  updatePassord(user:string, oldPass:string, newPass:string, newPass2:string):boolean{
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