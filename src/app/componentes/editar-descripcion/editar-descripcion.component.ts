import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-editar-descripcion',
  templateUrl: './editar-descripcion.component.html',
  styleUrls: ['./editar-descripcion.component.css']
})
export class EditarDescripcionComponent implements OnInit {

  descripcion: String | undefined
  usuario: Usuario | undefined
  

  @Output() onEditEvent = new EventEmitter();

  constructor(private usuarioService: PortadaService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {
      
      this.usuario=data;
      this.descripcion = this.usuario.descripcion;
     
  })
  }



  onEdit(){
    if(this.usuario){
    const usuarioEditado: Usuario = this.usuario
    if(this.descripcion){
      usuarioEditado.descripcion=this.descripcion
      this.usuarioService.updateUsuario(usuarioEditado).subscribe(data => {
        /* alert("Experiencia editada") */
        this.onEditEvent.emit();
      }, err => { alert("Algo salió mal") })
    }
  }
  }
}
