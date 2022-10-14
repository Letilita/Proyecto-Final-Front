import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { PortadaService } from 'src/app/servicios/portada.service';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuarioAEditar: Usuario | undefined;

  nombreEditado: String = "";
  profesionEditada: String = "";
  backgroundImageEditada: String ="";
  linkInEditado: String ="";
  linkWPEditado: String ="";
  linkGHEditado: String ="";
  linkIGEditado: String=""; 
  emailEditado: String= "";

  @Output() onEditEvent = new EventEmitter



  constructor(private usuarioService: PortadaService) {

  }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => {
      this.usuarioAEditar = data
      this.nombreEditado = this.usuarioAEditar?.nombre;
      this.profesionEditada = this.usuarioAEditar?.profesion;
      this.backgroundImageEditada = this.usuarioAEditar?.backgroundImage;
      this.linkInEditado = this.usuarioAEditar?.linkIn;
      this.linkGHEditado = this.usuarioAEditar?.linkGH;
      this.linkWPEditado = this.usuarioAEditar?.linkWP;
      this.linkIGEditado = this.usuarioAEditar?.linkIG;
      this.emailEditado = this.usuarioAEditar?.email;
    })



  }

  onEdit() {
    if (this.usuarioAEditar) {
      const usuarioEditado = { nombre: this.nombreEditado, profesion: this.profesionEditada, backgroundImage: this.backgroundImageEditada, linkIn: this.linkInEditado, linkGH: this.linkGHEditado, linkWP: this.linkWPEditado, linkIG: this.linkIGEditado, email: this.emailEditado, imagenPersonal: this.usuarioAEditar.imagenPersonal, descripcion: this.usuarioAEditar.descripcion, id: this.usuarioAEditar.id, password: this.usuarioAEditar.password, cv:this.usuarioAEditar.cv }
   
       if (usuarioEditado !== undefined) {
        this.usuarioService.updateUsuario(usuarioEditado).subscribe(data => {

          this.onEditEvent.emit();
        }, err => { alert("Algo salió mal") })

      }

    }
  }

}


