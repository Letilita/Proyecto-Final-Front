import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-borrar-proyecto',
  templateUrl: './borrar-proyecto.component.html',
  styleUrls: ['./borrar-proyecto.component.css']
})
export class BorrarProyectoComponent implements OnInit {


  @Output() onDeleteEvent = new EventEmitter();

  public proyectos: Proyecto[] = []

  idProyABorrar: number = 0;

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    } );
  }

  onDelete(): void {
    this.proyectoService.deleteProyecto(this.idProyABorrar).subscribe(data => {
      this.onDeleteEvent.emit();
    }, err => { alert("Algo salió mal") })

  }
}


