import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private Http:HttpClient) { }

  readbackend():Observable<any>{
    return this.Http.get('http://localhost:8080/readperson');
    // return this.Http.get('assets/data/persona.json');
  }
}
