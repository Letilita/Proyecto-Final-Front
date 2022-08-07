import { Component, OnInit } from '@angular/core';
import { CategoriaEducacion } from 'src/app/models/CategoriaEducacion.model';
import { Educacion } from 'src/app/models/Educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[]= [];
  categorias: CategoriaEducacion[] = [];
  educacionesFiltradas: Educacion[] = [];
  educacionActual?: Educacion

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {

      this.educacionService.getEducaciones().subscribe(data => {    
      this.educaciones = data;
      console.log(this.educaciones)
      
      
  } );

      this.educacionService.getCateEducacion().subscribe(data => {    
      this.categorias = data;
      
      
  } );

  }

  public filtrarPorCategoria(id: number): Educacion[]{
    this.educacionesFiltradas = this.educaciones.filter(educacion => educacion.catEdu.idCatEdu==id)
    return this.educacionesFiltradas;


  }

  renderizar(){
    this.educacionService.getEducaciones().subscribe(data => {    
      this.educaciones = data;
      console.log(this.educaciones)
      
      
  } );

      this.educacionService.getCateEducacion().subscribe(data => {    
      this.categorias = data;
      
      
  } );


  }

  guardarEducacion(edu: Educacion) {
    this.educacionActual=edu;

  }

}
