import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { DataService } from 'src/app/servicios/data.service';
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

  constructor( private portadaService: PortadaService) { }

  ngOnInit(): void {    
    
    this.portadaService.getUsuario().subscribe(data => {
      
      this.usuario=data;
      console.log(this.usuario);
     
  } );
  
  
  }

}
