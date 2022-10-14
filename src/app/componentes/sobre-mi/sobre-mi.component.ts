import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  usuarioAEditar: Usuario | undefined
  foto: any;
  cvEditado: String = "";
  fotoEditada: String = "";
  constructor(private datos: PortadaService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.datos.getUsuario().subscribe(data => {   
      this.usuarioAEditar = data 
      this.foto = this.usuarioAEditar.imagenPersonal
      this.cvEditado = this.usuarioAEditar.cv;
  } );
  }

  estaLogueado(){
    return this.autenticacionService.isLoggedIn();
}

onEdit(){
  if (this.usuarioAEditar) {
    const usuarioEditado = { nombre: this.usuarioAEditar.nombre, profesion: this.usuarioAEditar.profesion, backgroundImage: this.usuarioAEditar.backgroundImage, linkIn: this.usuarioAEditar.linkIn, linkGH: this.usuarioAEditar.linkGH, linkWP: this.usuarioAEditar.linkWP, linkIG: this.usuarioAEditar.linkIG, email: this.usuarioAEditar.email, imagenPersonal: this.foto, descripcion: this.usuarioAEditar.descripcion, id: this.usuarioAEditar.id, password: this.usuarioAEditar.password, cv:this.cvEditado }
 
     if (usuarioEditado !== undefined) {
      this.datos.updateUsuario(usuarioEditado).subscribe(data => {

        
      }, err => { alert("Algo salió mal") })

    }

  }
}



}
