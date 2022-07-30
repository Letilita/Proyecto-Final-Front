import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  experiencias: any;
  foto: any;
  certificaciones: any;
  formacion: any;
  descripcion:any;
  constructor(private datos: DataService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experiencias = data.experiencia;
      this.foto = data.imagenPersonal
      this.certificaciones = data.educacion.certificaciones;
      this.formacion = data.educacion.formacion;
      this.descripcion =data.descripcion;
  } );
  }

}
