import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  nombreEd: string;
  descripcionEd:string;

  constructor(public modal: NgbModal,private educacionS: EducacionService, private router: Router ) { }

  ngOnInit(): void {
  }
  
  onCreate():void{
    const expe = new Educacion (this.nombreEd, this.descripcionEd);
    this.educacionS.save(expe).subscribe(data =>{
      window.location.reload()   

      alert("Educacion agregada con exito")
    }, err =>{
      alert("Fallo");
      window.location.reload()   

    }
    )
  }
}