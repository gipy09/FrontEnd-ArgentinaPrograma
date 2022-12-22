import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { FileUploadService } from 'src/app/service/file-upload-service.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  persona : persona =null;
  constructor(private activatedRouter: ActivatedRoute,
     private personaS: PersonaService,
     private router: Router,
     public imageService: FileUploadService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data=>{
        this.persona=data;
      },err=>{
        alert("error al modifical");
        this.router.navigate([''])

      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaS.update(id, this.persona).subscribe(
      data=>{
        alert("El usuario se modifico correctamente")
        this.router.navigate([''])
      },err=>{
        alert("Error al modificar usuario")
        this.router.navigate([''])
      }
    )
  }
  uploadImg($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImg($event, name);
  }
}
