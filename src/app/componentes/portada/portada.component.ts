import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  
  public usuario: Usuario | undefined;
  public usuarioEditado: Usuario | undefined;
  
  // miPorfolio: any;
  // edicion: Boolean = false;

  constructor( private portadaService: PortadaService, private autenticacionService : AutenticacionService) { }

  ngOnInit(): void {    
    
    this.portadaService.getUsuario().subscribe(data => {
      this.usuario=data;
  } );
  
  
  }

  renderizar(){
    this.portadaService.getUsuario().subscribe(data => {
      this.usuario=data;
    })
  }

  estaLogueado(){
    return this.autenticacionService.isLoggedIn();
}
}
