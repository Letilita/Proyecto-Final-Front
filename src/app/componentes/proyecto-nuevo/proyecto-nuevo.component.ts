import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyecto-nuevo',
  templateUrl: './proyecto-nuevo.component.html',
  styleUrls: ['./proyecto-nuevo.component.css']
})
export class ProyectoNuevoComponent implements OnInit {

  nombreProyNuevo: String = "";
  descripcionProyNuevo: String = "";
  fechaProyNuevo: String = "";
  imagenProyNuevo: String = "";
  linkProyNuevo: String = "";

  @Output() onCreateEvent = new EventEmitter();

  constructor(private proyectoService: ProyectosService) { }


  ngOnInit(): void {
  }

  onCreate() {

    const { nombreProyNuevo, descripcionProyNuevo, fechaProyNuevo, linkProyNuevo, imagenProyNuevo } = this;
    const nuevoProyecto: Proyecto = { nombreProy: nombreProyNuevo, descripcionProy: descripcionProyNuevo, fechaProy: fechaProyNuevo, linkProy: linkProyNuevo, imagenProy: imagenProyNuevo };
    this.proyectoService.createProyecto(nuevoProyecto).subscribe(data => {

      this.onCreateEvent.emit();
      this.nombreProyNuevo = "";
      this.descripcionProyNuevo = "";
      this.fechaProyNuevo = "";
      this.imagenProyNuevo = "";
      this.linkProyNuevo = "";
    }, err => {
      alert("Algo salió mal")
    }
    );

  }

}


