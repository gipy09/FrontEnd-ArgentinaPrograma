import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NeweducacionComponent } from './components/education/neweducacion.component';
import { EditeducacionComponent } from './components/education/editeducacion.component';
import { NewproyectoComponent } from './components/proyect/newproyecto.component';
import { EditproyectoComponent } from './components/proyect/editproyecto.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditskillComponent } from './components/skill/editskill.component';
import { NewskillComponent } from './components/skill/newskill.component';
import { EditUsuarioComponent } from './components/about/edit-usuario.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProyectComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    ModalComponent,
    EditskillComponent,
    NewskillComponent,
    EditUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()) 
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
