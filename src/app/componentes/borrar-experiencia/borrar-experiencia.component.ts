import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-borrar-experiencia',
  templateUrl: './borrar-experiencia.component.html',
  styleUrls: ['./borrar-experiencia.component.css']
})
export class BorrarExperienciaComponent implements OnInit {

  @Input() experienciaABorrar?: Experiencia
  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    
  }

  onDelete():void{
    console.log(this.experienciaABorrar)
   /*  this.experienciaService.deleteExperiencia(id).subscribe(data => {
      
      alert("Experiencia borrada")
      
  }, err =>{alert("Algo salió mal")} )
 */
    }
  }


