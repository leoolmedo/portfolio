import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/servicio/backend.service';
import { LoginService } from 'src/app/servicio/login.service';
import { JOBS } from 'src/emptys';
import { Jobs } from 'src/interfaces';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobData:Jobs[]=[];
  jobDataBkp={} as Jobs;
  jobOrder:boolean=true;
  dataError:boolean=false;
  showJobModal:boolean=false;
  showDelJobModal:boolean=false;


  constructor(private backend:BackendService,
              private login:LoginService) { }

  ngOnInit(): void {

    this.readJob();
  }

  readJob(){
    this.backend.readJob().subscribe(
      {
        next: (data) => {
          this.jobData = data;
          this.orderJob(this.jobOrder);
          // console.log(this.jobData);
        },
        error: (error) =>{
          this.dataError=true;
        }
      }
    )
  }

  orderJob(order:boolean):void{
    // console.log("order: " + order);
    if(order){
      this.jobData = this.jobData.sort((job1,job2) =>{
        var d1:Date= new Date(job1.startDate);
        var d2:Date = new Date(job2.startDate);
        return +d1 - +d2; 
      })
    }
    else {
      this.jobData = this.jobData.sort((job1,job2) =>{
        var d1:Date= new Date(job1.startDate);
        var d2:Date = new Date(job2.startDate);
        return +d2 - +d1;
      })
    }
  }

  //function to enable edit and delete icons
  editable():boolean{
    return this.login.isloged();
  }

  closeJobModal(){
    this.showJobModal=false;
  }

  onNewJob(){

    Object.assign(this.jobDataBkp,JOBS);
    this.showJobModal=true;
    console.log(this.jobDataBkp);
    console.log(JOBS);
  }

  onEditJobModal(id2edit:number){

    Object.assign(this.jobDataBkp,this.jobData.find(edu=>edu.id == id2edit));
    this.showJobModal=true;
  }

  jobUpdate(){
    this.backend.updateJob(this.jobDataBkp).subscribe({
      next: (data) => {
        this.readJob();
      },
      error: (error) => {
        alert("Errro while updating the Education item: " + this.jobDataBkp.id + "\n" + error);
      }
    })
    this.closeJobModal();
  }

  onDelJobModal(id2del:number){

    Object.assign(this.jobDataBkp,this.jobData.find(edu => edu.id ==id2del));
    this.showDelJobModal=true;
  }

  closeDelJobModal(){
    this.showDelJobModal=false;
  }

  jobDelete(id2del:number){

    this.backend.delJob(id2del).subscribe({
      next: (data) =>{
        this.readJob();
      },
      error: (error) =>{
        alert("Errro while deleting the Education item: " + id2del + "\n" + error);
      }
    });
    this.closeDelJobModal();
  }

  

}
