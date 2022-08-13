import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriaSkill } from 'src/app/models/CategoriaSkill.model';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-categoria-skill-nueva',
  templateUrl: './categoria-skill-nueva.component.html',
  styleUrls: ['./categoria-skill-nueva.component.css']
})
export class CategoriaSkillNuevaComponent implements OnInit {

  @Output() onCreateEvent = new EventEmitter();

  nombreCatSkillNueva?: String
  

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
  }

  onCreate(){

    if (this.nombreCatSkillNueva) {
        
      
      const nuevaCatSkill: CategoriaSkill = { nombreCatSkill: this.nombreCatSkillNueva };

      console.log(nuevaCatSkill)
      this.skillService.createCateSkill(nuevaCatSkill).subscribe(data => {

        this.onCreateEvent.emit();
        this.nombreCatSkillNueva = "";

      }, err => {
        console.log(err);
        alert("Algo salió mal")
      }
      );

    }
  }
}
