import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  nombreCatEduAsignada?: String

  @Input() catEduAsignada?: CategoriaEducacion

  @Output() onCreateEvent = new EventEmitter();

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.educacionService.getCateEducacion().subscribe(data => {
      this.categorias = data;
    })
  }

  onCreate() {
    
      this.catEduNueva = this.categorias?.find(categoria => categoria.idCatEdu == this.idCatEduNueva)

      if (this.catEduAsignada) {
        const { institucionNueva, tituloNuevo, logoInstitucionNuevo, inicioNuevo, finNuevo, descripcionNueva, catEduAsignada } = this;
        const nuevaEducacion: Educacion = { institucion: institucionNueva, titulo: tituloNuevo, logoInstitucion: logoInstitucionNuevo, inicio: inicioNuevo, fin: finNuevo, descripcion: descripcionNueva, catEdu: catEduAsignada };

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
          alert("Algo sali?? mal")
        }
        );

      
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.nombreCatEduAsignada = this.catEduAsignada?.nombreCatEdu;
  
  }
}


