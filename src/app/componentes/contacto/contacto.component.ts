import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: Usuario | undefined;

  constructor(private usuarioService: PortadaService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuario().subscribe(data => {
      
      this.usuario = data;

    } );
    
  }

}
