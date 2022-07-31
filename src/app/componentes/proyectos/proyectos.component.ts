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

  constructor( private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      
      this.proyectos = data;
      console.log(this.proyectos)

  } );

  }

}
