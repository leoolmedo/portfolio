import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { BackendService } from 'src/app/servicio/backend.service';
import { LoginService } from 'src/app/servicio/login.service';
import { Skill } from 'src/interfaces';


@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css'],
})
export class SkilsComponent implements OnInit {
  skillData:Skill[]=[];
  skillDataBkp={} as Skill;
  skillOrder:boolean=true;
  dataError:boolean=false;
  showSkillModal:boolean=false;
  showDelSkillModal:boolean=false;
  titleEdit:string="";



  constructor(private backend:BackendService,
              private login:LoginService) { }

  ngOnInit(): void {
    this.readSkill();
    
  }

  readSkill(){
    this.backend.readSkill().subscribe(
      {
        next: (data) => {
          this.skillData = data;
          this.orderSkill(this.skillOrder);
          // console.log(this.skillData);
        },
        error: (error) =>{
          this.dataError=true;
        }
      }
    )
  }

  orderSkill(order:boolean):void{
    // console.log("order: " + order);
    if(order){
      this.skillData.sort((skill1,skill2) => skill1.name.localeCompare(skill2.name));
    }
    else {
      this.skillData.sort((skill1,skill2) => skill2.name.localeCompare(skill1.name));
    }
  }


    //function to enable edit and delete icons
    editable():boolean{
      if (this.login.isloged()){
        this.titleEdit="Click to edit";
      }
      else {
        this.titleEdit=("Please login");
        }
      return this.login.isloged();
    }


  onNewSkill(){
    console.log("nuevo skill"); 
    this.skillDataBkp.id=0;
    this.skillDataBkp.link="";
    this.skillDataBkp.name="";
    this.skillDataBkp.kind=true;
    this.skillDataBkp.logo="";        
    this.skillDataBkp.ratio=100;      //I'm dominate this skill, for sure!!!!
    this.showSkillModal=true;
  }

  onEditSkillModal(id2edit:number){
    if(this.editable()){
      console.log("el id del skill a editar es: "+id2edit);
      Object.assign(this.skillDataBkp,this.skillData.find(skill=>skill.id == id2edit));
      this.showSkillModal=true;
    }
    
  }

  onDelSkillModal(id2del:number){
    Object.assign(this.skillDataBkp,this.skillData.find(skill=>skill.id == id2del));
    this.showDelSkillModal=true;
    console.log("el id del skill a borrar es: " + id2del);
  }

  closeSkillModal(){
    this.showSkillModal=false;
  }

  skillUpdate(){
    this.backend.updateSkill(this.skillDataBkp).subscribe({
      next: (data) => {
        this.readSkill();
      },
      error: (error) => {
        alert("Errro while updating the Skill item: " + 
        "\nSkill id: " + this.skillDataBkp.id +
        "\nSkill kind: " + this.skillDataBkp.kind +
        "\nSkill link: " + this.skillDataBkp.link +
        "\nSkill logo: " + this.skillDataBkp.logo +
        "\nSkill name: " + this.skillDataBkp.name +
        "\nSkill ratio: " + this.skillDataBkp.ratio +
        "\n" + error);
      }
    })
    this.closeSkillModal();

    console.log("Se actulizó el skill " + this.skillDataBkp.name );
  }

  closeDelSkillModal(){
    this.showDelSkillModal=false;
  }

  skillDelete(id:number){
  this.backend.delSkill(id).subscribe({
      next: (data) => {
        this.readSkill();
        console.log("Se borarró el Skill con id" + id);
      },
      error: (error) => {
        alert("Errro while deleting the Skill item with id: " + id +
        "\nwith Error:" + error);
        console.log("Error borrando el Skill con id" + id);
      }
    })
    this.closeSkillModal();
    
  }

}
