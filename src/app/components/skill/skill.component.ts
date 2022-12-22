import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill: Skill[] = [];

  constructor(public modal: NgbModal,private skills: SkillService, private tokenService: TokenService){}

  isLogged=false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarSkills():void{
    this.skills.lista().subscribe(
      data=>{
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skills.delete(id).subscribe(
        data=>{
          this.cargarSkills();
          
        }, err=>{
          alert("no se borro skill");
        }
      )
    }
  }

}
