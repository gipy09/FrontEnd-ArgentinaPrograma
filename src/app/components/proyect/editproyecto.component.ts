import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { FileUploadService } from 'src/app/service/file-upload-service.service';
import { ProyectoService } from 'src/app/service/proyecto.service';


@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {

  proyect: Proyecto= null;

  constructor(private proyectoS: ProyectoService, private activatedRoute: ActivatedRoute,
     private router:Router,
     public imageService: FileUploadService) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data=>{
        this.proyect=data;
      },err=>{
        alert("error modificar");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyect.img=this.imageService.urlpro
    this.proyectoS.update(id, this.proyect).subscribe(
      data=>{
        alert("se modifico correctamente el proyecto");

        this.router.navigate(['']);
      },err=>{
        alert("error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImgPro($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImg($event, name);
  }



}
