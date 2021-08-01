import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/models/charactere/Result';
import { CharactereService } from '../../services/charactere.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit {


  resultCharacter: Result= new Result();

  constructor(private route: ActivatedRoute,
              private rickService: CharactereService
              ) {

                
               }

  ngOnInit(): void {
    this.viewDetail();
  }


  viewDetail(){

    this.route.params.subscribe(async param=>{
      
      if(param.id){

        this.resultCharacter = await this.rickService.getCharacter(param.id).toPromise();

      }
    });

  }
}
