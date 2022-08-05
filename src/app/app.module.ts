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
    BorrarExperienciaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
