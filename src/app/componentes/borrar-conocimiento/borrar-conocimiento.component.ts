import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/models/Skill.model';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-borrar-conocimiento',
  templateUrl: './borrar-conocimiento.component.html',
  styleUrls: ['./borrar-conocimiento.component.css']
})
export class BorrarConocimientoComponent implements OnInit {

  @Input() skillABorrar?: Skill
  @Output() onDeleteEvent = new EventEmitter();

  constructor( private conocimientoService: SkillService) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(this.skillABorrar?.idSkill!== undefined){
      this.conocimientoService.deleteSkill(this.skillABorrar.idSkill).subscribe(data => {      
        this.onDeleteEvent.emit();
    }, err =>{alert("Algo salió mal")} )
   
      }

  }

}
