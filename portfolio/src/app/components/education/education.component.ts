import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';
import { LoginService } from 'src/app/servicio/login.service';
import { EDUCATION, PERSON } from 'src/emptys';
import { Education, Person } from 'src/interfaces';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  eduData:Education[]=[];             //declare an object of type Education complete empty
  eduDataBkp={} as Education;         //declare Another Education object to edit the data in the modal.
  showEduModal:boolean=false;         //variable to show modal
  showDelEduModal:boolean = false;    //Variable to show the delete item
  dataError:boolean = false;          //variable to show the error loading data
  eduOrder:boolean = true;            //default order for education items
  logoTmp:String = "";                //path of the local image used to show the picture during the save.

  constructor(private backend:BackendService,
              private login:LoginService) { }

  ngOnInit(): void {
    this.readEducation();    
  }

  readEducation(){
    this.backend.readEducation().subscribe(
      {
        next: (data) => {
          this.eduData = data;
          this.orderEdu(this.eduOrder);
        },
        error: (error) => {
          this.dataError = true;
        }
      }
    );
  }

  orderEdu(order:boolean){
    if(order){
      this.eduData = this.eduData.sort((edu1,edu2) =>{
        var d1:Date= new Date(edu1.startDate);
        var d2:Date = new Date(edu2.startDate);
        return +d1 - +d2;
      })
    }
    else {
      this.eduData = this.eduData.sort((edu1,edu2) =>{
        var d1:Date= new Date(edu1.startDate);
        var d2:Date = new Date(edu2.startDate);
        return +d2 - +d1;
      })
    }
  }

  //function to enable edit and delete icons
  editable():boolean{
    return this.login.isloged();
  }

  onEditEduModal(id2edit:number){
    Object.assign(this.eduDataBkp,this.eduData.find(edu => edu.id == id2edit));
    this.showEduModal = true;
  }

  eduUpdate(){
    this.backend.updateEducation(this.eduDataBkp).subscribe(
      {
        next: (data) => {
          this.readEducation();
        },
        error: (error) => {
          alert("Error while updating education item.");
          console.log(error);
        }
      }
    );
    
    this.closeEduModal();
  }

  closeEduModal(){
    this.showEduModal=false;
  }

  onDelEduModal(id:number){
    Object.assign(this.eduDataBkp,this.eduData.find(edu => edu.id == id));
    this.showDelEduModal = true;
  }
  
  closeDelEduModal(){
    this.showDelEduModal = false;
  }

  eduDelete(id:number){
    this.backend.delEducation(id).subscribe(
      {
        next: (data) => {
          this.readEducation();
        },
        error: (error) => {
          alert("Error while deleting education item.");
        }
      }
    );
    this.showDelEduModal = false;
  }

  onNewEdu(){
    Object.assign(this.eduDataBkp,EDUCATION);
    this.showEduModal=true;


  }


}
