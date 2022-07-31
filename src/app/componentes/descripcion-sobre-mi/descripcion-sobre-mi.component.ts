import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-descripcion-sobre-mi',
  templateUrl: './descripcion-sobre-mi.component.html',
  styleUrls: ['./descripcion-sobre-mi.component.css']
})
export class DescripcionSobreMiComponent implements OnInit {
  public usuario: Usuario | undefined;
  public descripcion: String= "";


  constructor(private usuarioService: PortadaService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {
      
      this.descripcion=data.descripcion;
      console.log(this.usuario);
  })
  }
}
