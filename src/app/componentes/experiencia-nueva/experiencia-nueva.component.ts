import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/models/Experiencia.model';

@Component({
  selector: 'app-experiencia-nueva',
  templateUrl: './experiencia-nueva.component.html',
  styleUrls: ['./experiencia-nueva.component.css']
})
export class ExperienciaNuevaComponent implements OnInit {
  puestoNuevo: String = "";
  empresaNueva: String = "";
  logoEmpresaNuevo: String = "";
  inicioNuevo: String = "";
  finNuevo: String = "";



  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.empresaNueva.length === 0 || this.puestoNuevo.length === 0 || this.inicioNuevo.length === 0) {
      alert("El campo empresa, puesto e inicio deben tener contenido para poder crear la experiencia")
    } else {
      const { puestoNuevo, empresaNueva, logoEmpresaNuevo, inicioNuevo, finNuevo } = this;
      const nuevaExperiencia: Experiencia = { puesto: puestoNuevo, empresa: empresaNueva, logoEmpresa: logoEmpresaNuevo, inicio: inicioNuevo, fin: finNuevo };
      this.experienciaService.createExperiencia(nuevaExperiencia).subscribe(data => {
        alert("Experiencia añadida");
      }, err => {
        alert("Algo salió mal")
      }
      );

    }
    }

  }
