import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string='';
  descripcionE: string='';


  constructor(public modal: NgbModal,private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia (this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data =>{
      
      window.location.reload()   
      alert("Experiencia agregada con exito") 
    }, err =>{
      alert("Ocurrio un error, revise los campos");
      window.location.reload()    
    }
    )
  }

}
