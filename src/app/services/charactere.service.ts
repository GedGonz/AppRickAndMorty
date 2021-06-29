import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Charactere } from '../../models/charactere/Charactere';

@Injectable({
  providedIn: 'root'
})
export class CharactereService {

  uri: string=environment.API_URL;

  constructor(private http:HttpClient) { }


  getCharacters(): Observable<Charactere>{
    const url= `${this.uri}`;
    return this.http.get<Charactere>(url);
  }
}
