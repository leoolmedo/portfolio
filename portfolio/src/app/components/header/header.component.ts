import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  personData:any;
  myError:any = 0;

  constructor(private servBackend:BackendService) { }
  

  ngOnInit(): void {
    this.personData={};
    this.servBackend.readPerson().subscribe({
      next: (data) =>{
        this.personData=data[0];
      },
      error: (error) =>{
        this.myError = error;
        console.log(this.myError);
      }})
  }

}
