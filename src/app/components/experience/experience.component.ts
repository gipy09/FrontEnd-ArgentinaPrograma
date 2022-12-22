import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia: Experiencia []= [];
  
  constructor(public modal: NgbModal,private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged= false;
  ngOnInit(): void {
    this.cargarExp();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  
cargarExp():void{
  this.sExperiencia.lista().subscribe(data=> {this.experiencia=data;})
}


delete(id?:number){
  if(id != undefined){
    this.sExperiencia.delete(id).subscribe(
      data=>{
        this.cargarExp();
      },err=>{
        alert("No se pudo elimiar experiencia")
      }
    )
  }
}
}
