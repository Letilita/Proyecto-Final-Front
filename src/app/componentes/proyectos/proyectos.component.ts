import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any;

  constructor( private datos: DataService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      
      this.proyectos = data.proyectos;

  } );

  }

}
