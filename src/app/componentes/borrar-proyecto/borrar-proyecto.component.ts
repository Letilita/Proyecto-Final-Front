import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/models/Proyecto.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-borrar-proyecto',
  templateUrl: './borrar-proyecto.component.html',
  styleUrls: ['./borrar-proyecto.component.css']
})
export class BorrarProyectoComponent implements OnInit {

  @Input() proyectoABorrar?: Proyecto;
  @Output() onDeleteEvent = new EventEmitter();

  constructor(private proyectoService: ProyectosService) { }

  ngOnInit(): void {
  }

  onDelete():void{
    
    if(this.proyectoABorrar?.idProy!== undefined){
    this.proyectoService.deleteProyecto(this.proyectoABorrar.idProy).subscribe(data => {      
      this.onDeleteEvent.emit();
  }, err =>{alert("Algo salió mal")} )
 
    }
  }

}
