import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencias: Experiencia[] = [];
  puestos: String = ""
  trabajoActual?: Experiencia

  constructor(private experienciaService: ExperienciaService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experiencias = data;
    })
  }
  public convertirEnArray(cadena: String): String[] {
    
    return cadena.split(",");
  }

  //  Esta función está para poder pasarle al modal la experiencia de cada iteración desde la vista. Hay que ver si lo puedo resolver de otra manera
  guardarTrabajo(trabajo: Experiencia) {
    this.trabajoActual = trabajo;
  }


  renderizar(){
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experiencias = data;
  })}

  estaLogueado(){
    return this.autenticacionService.isLoggedIn();
}

}