import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Experiencia } from 'src/app/models/Experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  @Input() experienciaAEditar?: Experiencia

  empresaEditada: String | undefined = this.experienciaAEditar?.empresa;
  puestoEditado: String | undefined = this.experienciaAEditar?.puesto;
  logoEmpresaEditado: String | undefined = this.experienciaAEditar?.logoEmpresa;
  inicioEditado: String | undefined = this.experienciaAEditar?.inicio;
  finEditado: String | undefined = this.experienciaAEditar?.fin;
  idExpEditado: number | undefined = this.experienciaAEditar?.idExp;

  /* experienciaEditada: Experiencia | undefined; */

  @Output() onEditEvent = new EventEmitter();


  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.idExpEditado = this.experienciaAEditar?.idExp;
    this.empresaEditada = this.experienciaAEditar?.empresa;
    this.puestoEditado = this.experienciaAEditar?.puesto;
    this.logoEmpresaEditado = this.experienciaAEditar?.logoEmpresa;
    this.inicioEditado = this.experienciaAEditar?.inicio;
    this.finEditado = this.experienciaAEditar?.fin;

  }

  onEdit() {

    if (this.puestoEditado && this.empresaEditada && this.logoEmpresaEditado && this.inicioEditado && this.finEditado && this.idExpEditado) {
      const { idExpEditado, empresaEditada, puestoEditado, logoEmpresaEditado, inicioEditado, finEditado } = this
      const experienciaEditada: Experiencia = { idExp: idExpEditado, empresa: empresaEditada, puesto: puestoEditado, logoEmpresa: logoEmpresaEditado, inicio: inicioEditado, fin: finEditado };

      if (experienciaEditada !== undefined) {
        this.experienciaService.updateExperiencia(experienciaEditada).subscribe(data => {
          /* alert("Experiencia editada") */
          this.onEditEvent.emit();
        }, err => { alert("Algo salió mal") })

      }

    }

  }
}
