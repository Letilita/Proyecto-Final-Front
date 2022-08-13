import { Component, OnInit } from '@angular/core';
import { CategoriaSkill } from 'src/app/models/CategoriaSkill.model';
import { Skill } from 'src/app/models/Skill.model';
import { DataService } from 'src/app/servicios/data.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  conocimientos: Skill[]= [];
  categorias: CategoriaSkill[] = [];
  conocimientosFiltrados: Skill[] = [];
  skillActual?:Skill;
  catSkillActual?:CategoriaSkill;
  

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
      this.skillService.getSkills().subscribe(data => {    
      this.conocimientos = data;
      console.log(this.conocimientos);
      
  } );

      this.skillService.getCateSkills().subscribe(data => {    
      this.categorias = data;
      console.log(this.filtrarPorCategoria(6));
      
  } );
  }

  public filtrarPorCategoria(id: number | undefined): Skill[]{
    this.conocimientosFiltrados = this.conocimientos.filter(skill => skill.catSkill.idCatSkill==id)
    return this.conocimientosFiltrados;
  }

  renderizar(){
    this.skillService.getSkills().subscribe(data => {    
      this.conocimientos = data;
      console.log(this.conocimientos);
      
  } );

      this.skillService.getCateSkills().subscribe(data => {    
      this.categorias = data;
      console.log(this.filtrarPorCategoria(6));
      
  } );
  }

  guardarSkill(skill: Skill){
    this.skillActual=skill;
  }

  guardarCategoriaSkill (catSkill: CategoriaSkill){
    this.catSkillActual = catSkill;
  }
}
