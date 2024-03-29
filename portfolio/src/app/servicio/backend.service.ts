import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  rooturl:String = "https://evening-stream-47799.herokuapp.com";
  // rooturl:String = "http://localhost:8080"
  urls ={
    readperson: this.rooturl + "/readperson/",
    saveperson: this.rooturl + "/saveperson/",
    readeducation: this.rooturl + "/readeducation/",
    saveeducation: this.rooturl + "/saveeducation/",
    deleducation: this.rooturl + "/deleducation/",
    readjob: this.rooturl + "/readwork/",
    savejob: this.rooturl + "/savework/",
    deljob: this.rooturl + "/delwork/",
    readskill: this.rooturl + "/readskill/",
    saveskill: this.rooturl + "/saveskill/",
    delskill: this.rooturl + "/delskill/"
  
  }
  constructor(private Http:HttpClient) { }

  readPerson():Observable<any>{
    return this.Http.get(this.urls.readperson);
    // return this.Http.get('assets/data/persona.json');
  }

  updatePerson(perData:any):Observable<any>{
    return this.Http.post<any>(this.urls.saveperson,perData);
  }

  readEducation():Observable<any>{
    return this.Http.get(this.urls.readeducation);
  }

  updateEducation(eduData:any):Observable<any>{
    return this.Http.post<any>(this.urls.saveeducation,eduData);   //save updated data of education item
  }

  delEducation(id:number):Observable<any>{
    return this.Http.delete(this.urls.deleducation + id);          //delete the education item
  }

  readJob():Observable<any>{
    return this.Http.get(this.urls.readjob);
  }

  updateJob(jobData:any):Observable<any>{
    return this.Http.post<any>(this.urls.savejob,jobData);   //save updated data of education item
   
  }

  delJob(id:number):Observable<any>{
    return this.Http.delete(this.urls.deljob + id);          //delete the education item
  }

  readSkill():Observable<any>{
    return this.Http.get(this.urls.readskill);
  }

  updateSkill(skilData:any):Observable<any>{
    return this.Http.post<any>(this.urls.saveskill, skilData);  //save updated data of skill
  }

  delSkill(id:number):Observable<any>{
    return this.Http.delete(this.urls.delskill + id);      //delete a skill
  }
}
