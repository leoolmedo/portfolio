import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';
import { LoginService } from 'src/app/servicio/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  personData:any;
  myError:any = 0;
  edit:boolean = false;

  constructor(private servBackend:BackendService,
              private login:LoginService) { }
  

  ngOnInit(): void {
    this.personData={};
    this.servBackend.readPerson().subscribe(
      {
        next: (data) =>{
          this.personData=data[0];
        },
        error: (error) =>{
          this.myError = error;
          console.log(this.myError);
        }
      }
    )
  }

  onClickEdit():void{
    this.login.setlogin(!this.login.isloged());
    this.edit = this.login.isloged();

  }
  //function to enable edit and delete icons
  editable():boolean{
    return this.login.isloged();
  }

}
