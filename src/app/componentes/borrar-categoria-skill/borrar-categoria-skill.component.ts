import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaSkill } from 'src/app/models/CategoriaSkill.model';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-borrar-categoria-skill',
  templateUrl: './borrar-categoria-skill.component.html',
  styleUrls: ['./borrar-categoria-skill.component.css']
})
export class BorrarCategoriaSkillComponent implements OnInit {

  @Input() catSkillABorrar?: CategoriaSkill
  conocimientos: Skill[] = []
  conocimientosFiltrados: Skill[] = []

  @Output() onDeleteEvent = new EventEmitter();

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => {
      this.conocimientos = data;
      console.log(this.conocimientos);

    });
  }

  filtrarPorCategoria() {
    this.conocimientosFiltrados = this.conocimientos.filter(skill => skill.catSkill.idCatSkill == this.catSkillABorrar?.idCatSkill)

  }

  onDelete() {
    this.filtrarPorCategoria();
    for (let cat of this.conocimientosFiltrados) {
      if (cat.idSkill) {
        this.skillService.deleteSkill(cat.idSkill).subscribe(data => {
          
        }, err => { alert("Algo salió mal") })
      }
    }
    if(this.catSkillABorrar?.idCatSkill){
    this.skillService.deleteCateSkill(this.catSkillABorrar.idCatSkill).subscribe(data => {
      this.onDeleteEvent.emit();
    }, err => { alert("Algo salió mal") })
  
  }



  }

}
