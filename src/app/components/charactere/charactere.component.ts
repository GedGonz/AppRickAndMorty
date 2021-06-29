import { Component, OnInit } from '@angular/core';
import { CharactereService } from '../../services/charactere.service';
import { Charactere } from '../../../models/charactere/Charactere';

@Component({
  selector: 'app-charactere',
  templateUrl: './charactere.component.html',
  styleUrls: ['./charactere.component.css']
})
export class CharactereComponent implements OnInit {

  constructor(private service: CharactereService) {
    console.log("HOLA");
    this.service.getCharacters().subscribe((resp:Charactere)=>{

      console.log(resp);
    });
    
   }

  ngOnInit(): void {
    
    
  }

}
