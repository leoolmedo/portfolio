import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  personData:any;
  persona:any;
  constructor(private servBackend:BackendService) { }
  

  ngOnInit(): void {
    this.personData={};
    this.servBackend.readbackend().subscribe(data => {
      this.personData=data[0];
      console.log(this.personData);
    });
  }

}
