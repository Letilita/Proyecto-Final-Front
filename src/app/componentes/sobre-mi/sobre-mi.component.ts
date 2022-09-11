import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortadaService } from 'src/app/servicios/portada.service';

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
  constructor(private datos: PortadaService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.datos.getUsuario().subscribe(data => {    
      this.foto = data.imagenPersonal
  } );
  }

  estaLogueado(){
    return this.autenticacionService.isLoggedIn();
}

}
