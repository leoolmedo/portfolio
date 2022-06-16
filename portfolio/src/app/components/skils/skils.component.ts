import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';
import { LoginService } from 'src/app/servicio/login.service';


@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css'],
})
export class SkilsComponent implements OnInit {

  constructor(private backend:BackendService,
    private login:LoginService) { }

  ngOnInit(): void {
  }

  //function to enable edit and delete icons
  editable():boolean{
    return this.login.isloged();
  }


  onNewSkil(){

  }

}
