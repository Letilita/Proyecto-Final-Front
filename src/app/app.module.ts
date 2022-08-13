import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { DescripcionSobreMiComponent } from './componentes/descripcion-sobre-mi/descripcion-sobre-mi.component';
import { BarraNavegadoraComponent } from './componentes/barra-navegadora/barra-navegadora.component';
import { ExperienciaNuevaComponent } from './componentes/experiencia-nueva/experiencia-nueva.component';
import { BorrarExperienciaComponent } from './componentes/borrar-experiencia/borrar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarDescripcionComponent } from './componentes/editar-descripcion/editar-descripcion.component';
import { EducacionNuevaComponent } from './componentes/educacion-nueva/educacion-nueva.component';
import { BorrarEducacionComponent } from './componentes/borrar-educacion/borrar-educacion.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { ProyectoNuevoComponent } from './componentes/proyecto-nuevo/proyecto-nuevo.component';
import { BorrarProyectoComponent } from './componentes/borrar-proyecto/borrar-proyecto.component';
import { ConocimientoNuevoComponent } from './componentes/conocimiento-nuevo/conocimiento-nuevo.component';
import { BorrarConocimientoComponent } from './componentes/borrar-conocimiento/borrar-conocimiento.component';
import { EditarConocimientoComponent } from './componentes/editar-conocimiento/editar-conocimiento.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    ProyectosComponent,
    SobreMiComponent,
    ConocimientosComponent,
    ContactoComponent,
    LoginComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    DescripcionSobreMiComponent,
    BarraNavegadoraComponent,
    ExperienciaNuevaComponent,
    BorrarExperienciaComponent,
    EditarExperienciaComponent,
    EditarDescripcionComponent,
    EducacionNuevaComponent,
    BorrarEducacionComponent,
    EditarEducacionComponent,
    EditarUsuarioComponent,
    ProyectoNuevoComponent,
    BorrarProyectoComponent,
    ConocimientoNuevoComponent,
    BorrarConocimientoComponent,
    EditarConocimientoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
