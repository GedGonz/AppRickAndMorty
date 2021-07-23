import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Charactere } from '../../models/charactere/Charactere';
import { Result } from 'src/models/charactere/Result';

@Injectable({
  providedIn: 'root'
})
export class CharactereService {

  uri: string=environment.API_URL;

  constructor(private http:HttpClient) { }


  getCharacters(page:number): Observable<Charactere>{
    const url= `${this.uri}/character?page=${page}`;
    return this.http.get<Charactere>(url);
  }

  getCharacter(CharacterId:number): Observable<Result>{
    const url=`${this.uri}/character/${CharacterId}`;
    return this.http.get<Result>(url);
  }
  
}
