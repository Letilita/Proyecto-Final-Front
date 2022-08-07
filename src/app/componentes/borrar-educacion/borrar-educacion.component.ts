import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/models/Educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-borrar-educacion',
  templateUrl: './borrar-educacion.component.html',
  styleUrls: ['./borrar-educacion.component.css']
})
export class BorrarEducacionComponent implements OnInit {

  @Input() educacionABorrar?: Educacion
  @Output() onDeleteEvent = new EventEmitter();

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(this.educacionABorrar?.idEdu!== undefined){
      this.educacionService.deleteEducacion(this.educacionABorrar.idEdu).subscribe(data => {      
        this.onDeleteEvent.emit();
    }, err =>{alert("Algo salió mal")} )
   
      }
  }

}
