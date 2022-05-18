import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Person } from 'src/app/interfaces';
import { BackendService } from 'src/app/servicio/backend.service';
import { PERSON } from 'src/emptys';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})


export class PersonalDataComponent implements OnInit {
  perData:Person=PERSON;
  perDataBkp:Person=PERSON;
  showModal:boolean=false;
  
  
  constructor(private backend:BackendService) { }

  readPerson():void{
    this.backend.readPerson().subscribe(xdata =>{
      this.perData=xdata[0];
    });
  }

  closeModal():void{
    Object.assign(this.perData,this.perDataBkp);     //data restored to the oroginal values before the modal was opened.
    this.showModal=false;
  }    

   ngOnInit(): void {
    this.readPerson();
  }

  onEditModal(){
    Object.assign(this.perDataBkp,this.perData);     //before edit, save the original data in order to be restored when the close button is pressed
    this.showModal=true;
  }

  personUpdate(){
    this.backend.updatePerson(this.perData).subscribe({
      next: (data) =>{
        this.readPerson();
      },
      error: (error) =>{
        alert("Error while data update");
      }
    });
    this.showModal=false;
  }
  
}