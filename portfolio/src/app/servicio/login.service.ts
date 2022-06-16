import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private editEnabled:boolean = false;    //it was forced to true for testing porpouse only. 

  constructor() { }


  isloged():boolean{
    return this.editEnabled;
  }
  
  setlogin(login:boolean){
    this.editEnabled = login;
  }
}