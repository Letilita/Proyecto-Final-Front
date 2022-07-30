import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConocimientosComponent } from './componentes/conocimientos/conocimientos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: '', component: PortadaComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'conocimientos', component: ConocimientosComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
