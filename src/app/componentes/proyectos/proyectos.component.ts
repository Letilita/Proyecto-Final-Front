import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos: Proyecto[] = []

  idProyABorrar: number = 0;
  nombreProyABorrar?: String;

  idProyAEditar: number = 0;
  proyectoAEditar?: Proyecto
  nombreProyAEditar?: String = "";
  descripcionProyAEditar?: String ="";
  fechaProyAEditar?: String = "";
  imagenProyAEditar?: String = "";
  linkProyAEditar: String  | undefined= "";


  constructor(private proyectoService: ProyectosService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });

  }


  renderizar() {
    this.proyectoService.getProyectos().subscribe(data => {

      this.proyectos = data;
    })

  }



  onDelete(): void {
    this.proyectoService.deleteProyecto(this.idProyABorrar).subscribe(data => {
      this.renderizar()
    }, err => { alert("Algo salió mal") })

  }


  buscarPorId(id: number) {
    this.nombreProyABorrar = this.proyectos.find(proy => proy.idProy == id)?.nombreProy;
    return this.nombreProyABorrar;
  }

  onSelect() {
    
    this.proyectoAEditar = this.proyectos.find(proy => proy.idProy == this.idProyAEditar);
    this.nombreProyAEditar = this.proyectoAEditar?.nombreProy;
    this.descripcionProyAEditar = this.proyectoAEditar?.descripcionProy;
    this.fechaProyAEditar = this.proyectoAEditar?.fechaProy;
    this.imagenProyAEditar = this.proyectoAEditar?.imagenProy;
    this.linkProyAEditar = this.proyectoAEditar?.linkProy;
  }

  onEdit() {
    if (this.nombreProyAEditar && this.descripcionProyAEditar && this.fechaProyAEditar && this.imagenProyAEditar  && this.proyectoAEditar) {
     const proyectoEditado: Proyecto= { idProy: this.proyectoAEditar.idProy, nombreProy: this.nombreProyAEditar, descripcionProy: this.descripcionProyAEditar, fechaProy: this.fechaProyAEditar, imagenProy: this.imagenProyAEditar, linkProy: this.linkProyAEditar };

      this.proyectoService.updateProyecto(proyectoEditado).subscribe(data => {
        this.renderizar()
      }, err => { alert("Algo salió mal") })
    }
  }

  estaLogueado(){
    return this.autenticacionService.isLoggedIn();
}
}

