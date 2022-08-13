import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategoriaSkill } from 'src/app/models/CategoriaSkill.model';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-conocimiento-nuevo',
  templateUrl: './conocimiento-nuevo.component.html',
  styleUrls: ['./conocimiento-nuevo.component.css']
})
export class ConocimientoNuevoComponent implements OnInit {

  @Input() catSkillAsignada?: CategoriaSkill
  nombreCatSkillAsignada?: String

  nombreSkillNuevo: String = "";
  avanceNuevo?: number
  catSkillNuevo?: CategoriaSkill;
  categorias: CategoriaSkill[] = [];

  idCatSkillNueva: number = 0;

  nuevoSkill?: Skill

  @Output() onCreateEvent = new EventEmitter();

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getCateSkills().subscribe(data => {
      this.categorias = data;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this.nombreCatSkillAsignada = this.catSkillAsignada?.nombreCatSkill
  
  }

  onCreate(){
/*     if (this.idCatSkillNueva == 0) {
      alert("Debe seleccionar una categoría!")
    } else {
      this.catSkillNuevo = this.categorias?.find(categoria => categoria.idCatSkill == this.idCatSkillNueva)
      console.log(this.catSkillNuevo) */

      if (this.catSkillAsignada && this.avanceNuevo) {
        
        const { nombreSkillNuevo, avanceNuevo, catSkillAsignada } = this;
        const nuevaSkill: Skill = { nombreSkill: nombreSkillNuevo, avance: avanceNuevo, catSkill: catSkillAsignada };

        console.log(nuevaSkill)
        this.skillService.createSkill(nuevaSkill).subscribe(data => {

          this.onCreateEvent.emit();
          this.nombreSkillNuevo = "";
          this.avanceNuevo = 0;
          this.idCatSkillNueva = 0;

        }, err => {
          console.log(err);
          alert("Algo salió mal")
        }
        );

      }
    }

  }


