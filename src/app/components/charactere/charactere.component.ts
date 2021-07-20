import { Component, OnInit } from '@angular/core';
import { CharactereService } from '../../services/charactere.service';
import { Charactere } from '../../../models/charactere/Charactere';
import { Result } from 'src/models/charactere/Result';

@Component({
  selector: 'app-charactere',
  templateUrl: './charactere.component.html',
  styleUrls: ['./charactere.component.css']
})
export class CharactereComponent implements OnInit {

  page:number=1;
  characteres:Result[]=[] ;
  constructor(private service: CharactereService) {

    
   }

  ngOnInit(): void {
    this.getCharacters();
    
  }

  async getCharacters(){
    let resp=await this.service.getCharacters(this.page).toPromise();
    this.characteres.push(...resp.results);
   
  }
  async onScroll(){
    console.log("lo llama");
    this.page=this.page+1;
    await this.getCharacters();
  }

}
