import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';
import { DataService } from 'src/app/servicios/data.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: Proyecto[] = []
  public proyectoActual?: Proyecto
  idProyABorrar: number = 0;

  nombreProyAEditar:string="";
  descripcionProyAEditar:string="";
  fechaProyAEditar:string="";
  imagenProyAEditar:string="";
  linkProyAEditar:string="";

  constructor( private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      
      this.proyectos = data;
      console.log(this.proyectos)

  } );

  }

  guardarProyecto(proy: Proyecto){
    this.proyectoActual = proy;

  }

  renderizar(){
    this.proyectoService.getProyectos().subscribe(data => {
      
      this.proyectos = data;
    })

  }

  

  onDelete(){
    console.log(this.idProyABorrar)
  }

  onEdit(){
    console.log(this.idProyABorrar)
  }
}
