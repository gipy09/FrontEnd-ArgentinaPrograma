import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUsuarioComponent } from './components/about/edit-usuario.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditproyectoComponent } from './components/proyect/editproyecto.component';
import { NewproyectoComponent } from './components/proyect/newproyecto.component';
import { EditskillComponent } from './components/skill/editskill.component';
import { NewskillComponent } from './components/skill/newskill.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path: 'editedu/:id', component:EditeducacionComponent},
  {path: 'nuevopro', component:NewproyectoComponent},
  {path: 'editpro/:id', component:EditproyectoComponent},
  {path: 'modal', component:ModalComponent},
  {path: 'newskill', component:NewskillComponent},
  {path: 'editskill/:id', component:EditskillComponent},
  {path: 'editusuario/:id', component:EditUsuarioComponent}


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
