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

                this.viewDetail();
               }

  ngOnInit(): void {
    
  }


  viewDetail(){

    this.route.params.subscribe(async param=>{
      
      if(param.id){

        let resp=await this.rickService.getCharacter(param.id).toPromise();
        this.resultCharacter=resp;
      }
    });

  }
}
