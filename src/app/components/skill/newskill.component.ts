import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {

  nombreS: string;
  porcentaje: number;



  constructor(public modal: NgbModal,private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new Skill(this.nombreS, this.porcentaje);

    this.skillS.save(skill).subscribe(
      data =>{
        window.location.reload()   
        alert("skill creado con exito");
      },err=>{
        alert("fallo creacion de skill");
        window.location.reload()   
            }
    )
  }
}
