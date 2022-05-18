import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  urls ={
    readperson: "http://localhost:8080/readperson",
    saveperson: "http://localhost:8080/saveperson",
  
  }
  constructor(private Http:HttpClient) { }

  readPerson():Observable<any>{
    return this.Http.get(this.urls.readperson);
    // return this.Http.get('assets/data/persona.json');
  }

  updatePerson(perData:any):Observable<any>{
    return this.Http.post<any>(this.urls.saveperson,perData);
  }
}
