import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { FileUploadService } from 'src/app/service/file-upload-service.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  id: number;
  nombre: string;
  descripcion: string;
  img:string

  constructor(private proyectoS: ProyectoService, private router: Router,
  public  activatedRouter: ActivatedRoute,
  public imageService: FileUploadService,
  private activatedRoute: ActivatedRoute,
  public modal: NgbModal) { }

  ngOnInit(): void {

  }

  onCreate():void{
    const proyecto= new Proyecto(this.id, this.nombre, this.descripcion, this.img=this.imageService.urlpro);
    this.proyectoS.save(proyecto).subscribe(
      data=>{

        window.location.reload() 
        alert("Proyecto creado con exito")
        
      },err=>{
        window.location.reload() 
        alert("error al crear proy")
        
      }
    )
  }

  uploadImgNPro($event:any){
    const id= this.activatedRoute.snapshot.params['id'];
    const name= "proyecto_"+id;
    this.imageService.uploadImgPro($event,name)
  }
  
}
