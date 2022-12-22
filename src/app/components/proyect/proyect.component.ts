import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  proyecto: Proyecto[]= [];
  
  constructor(private proyectoS: ProyectoService, private tokenService: TokenService,
    private activatedRouter: ActivatedRoute,public modal: NgbModal) { }

  isLogged= false;


  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  
  }

  cargarProyectos():void{
    this.proyectoS.lista().subscribe(
      data=>{
        this.proyecto=data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(
        data=>{
          this.cargarProyectos();
          
        },err=>{
          alert("error al borrar proyecto");
        }
      )
    }
  }
  
  
}
