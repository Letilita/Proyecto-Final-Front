import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategoriaSkill } from 'src/app/models/CategoriaSkill.model';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-editar-conocimiento',
  templateUrl: './editar-conocimiento.component.html',
  styleUrls: ['./editar-conocimiento.component.css']
})
export class EditarConocimientoComponent implements OnInit {

  @Input() skillAEditar?: Skill
  @Output() onEditEvent = new EventEmitter();

  nombreSkillEditada: String | undefined = "";
  avanceEditado: number | undefined = 0;
  catSkillEditada: CategoriaSkill | undefined

  categorias: CategoriaSkill[] = []
  idCatSkillEditada: number | undefined ;
  idSkillEditada: number | undefined = 0;


  constructor(private conocimientoService: SkillService) { }

  ngOnInit(): void {
    this.conocimientoService.getCateSkills().subscribe(data => {    
      this.categorias = data;
  })
}

  /* Esta función está para que aparezca el contenido de la educación iterada, porque el componente se crea antes de llegue educacionAEditar */
ngOnChanges(changes: SimpleChanges) {
  this.idSkillEditada = this.skillAEditar?.idSkill;
  this.nombreSkillEditada = this.skillAEditar?.nombreSkill;
  this.catSkillEditada = this.skillAEditar?.catSkill;
  this.avanceEditado = this.skillAEditar?.avance;

}


  onEdit(){
    this.catSkillEditada = this.categorias?.find(categoria => categoria.idCatSkill == this.idCatSkillEditada);
    console.log(this.catSkillEditada);

    if (this.nombreSkillEditada && this.avanceEditado && this.idSkillEditada && this.catSkillEditada) {
      const { idSkillEditada, nombreSkillEditada, avanceEditado, catSkillEditada } = this
      const skillEditada: Skill = { idSkill: idSkillEditada, nombreSkill: nombreSkillEditada, avance: avanceEditado, catSkill: catSkillEditada };

      console.log(skillEditada)

      if (skillEditada !== undefined) {
        this.conocimientoService.updateSkill(skillEditada).subscribe(data => {
          
          this.onEditEvent.emit();
        }, err => { alert("Algo salió mal") })

      } 

    } else {
      alert("¡Debe completar todos los campos! No deje vacía la categoría")
    }


  }

}
