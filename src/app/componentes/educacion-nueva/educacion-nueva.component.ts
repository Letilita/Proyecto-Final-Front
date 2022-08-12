import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriaEducacion } from 'src/app/models/CategoriaEducacion.model';
import { Educacion } from 'src/app/models/Educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-nueva',
  templateUrl: './educacion-nueva.component.html',
  styleUrls: ['./educacion-nueva.component.css']
})
export class EducacionNuevaComponent implements OnInit {

  institucionNueva: String = "";
  tituloNuevo: String = "";
  logoInstitucionNuevo: String = "";
  inicioNuevo: String = "";
  finNuevo: String = "";
  descripcionNueva: String = "";
  catEduNueva: CategoriaEducacion | undefined
  categorias: CategoriaEducacion[] | undefined
  idCatEduNueva: number = 0;

  @Output() onCreateEvent = new EventEmitter();

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getCateEducacion().subscribe(data => {
      this.categorias = data;
    })
  }

  onCreate() {
    if (this.idCatEduNueva == 0) {
      alert("Debe seleccionar una categoría!")
    } else {
      this.catEduNueva = this.categorias?.find(categoria => categoria.idCatEdu == this.idCatEduNueva)
      console.log(this.catEduNueva)

      if (this.catEduNueva) {
        const { institucionNueva, tituloNuevo, logoInstitucionNuevo, inicioNuevo, finNuevo, descripcionNueva, catEduNueva } = this;
        const nuevaEducacion: Educacion = { institucion: institucionNueva, titulo: tituloNuevo, logoInstitucion: logoInstitucionNuevo, inicio: inicioNuevo, fin: finNuevo, descripcion: descripcionNueva, catEdu: catEduNueva };

        console.log(nuevaEducacion)
        this.educacionService.createEducacion(nuevaEducacion).subscribe(data => {

          this.onCreateEvent.emit();
          this.institucionNueva = "";
          this.tituloNuevo = "";
          this.logoInstitucionNuevo = "";
          this.inicioNuevo = "";
          this.finNuevo = "";
          this.descripcionNueva = "";
          this.idCatEduNueva = 0;
        }, err => {
          alert("Algo salió mal")
        }
        );

      }
    }
  }
}


