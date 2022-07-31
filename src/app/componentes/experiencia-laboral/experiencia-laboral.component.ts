import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experiencias: Experiencia [] = [];
  puestos: String= ""

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe(data => {
      
      
      this.experiencias = data;
      console.log(this.experiencias);

      
  })
}
 public convertirEnArray(cadena:String): String[]{
  console.log(cadena.split(","))
  return cadena.split(",");
 }

}
