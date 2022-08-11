import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';
import { DataService } from 'src/app/servicios/data.service';
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


  constructor(private proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe(data => {

      this.proyectos = data;
      console.log(this.proyectos)

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
    console.log(this.idProyAEditar)
    this.proyectoAEditar = this.proyectos.find(proy => proy.idProy == this.idProyAEditar);
    this.nombreProyAEditar = this.proyectoAEditar?.nombreProy;
    this.descripcionProyAEditar = this.proyectoAEditar?.descripcionProy;
    this.fechaProyAEditar = this.proyectoAEditar?.fechaProy;
    this.imagenProyAEditar = this.proyectoAEditar?.imagenProy;
    this.linkProyAEditar = this.proyectoAEditar?.linkProy;
  }

  onEdit() {

    console.log(this.nombreProyAEditar)

    if (this.nombreProyAEditar && this.descripcionProyAEditar && this.fechaProyAEditar && this.imagenProyAEditar  && this.proyectoAEditar) {
     const proyectoEditado: Proyecto= { idProy: this.proyectoAEditar.idProy, nombreProy: this.nombreProyAEditar, descripcionProy: this.descripcionProyAEditar, fechaProy: this.fechaProyAEditar, imagenProy: this.imagenProyAEditar, linkProy: this.linkProyAEditar };

      console.log(proyectoEditado)

      this.proyectoService.updateProyecto(proyectoEditado).subscribe(data => {
        this.renderizar()
      }, err => { alert("Algo salió mal") })
    }
  }
}

