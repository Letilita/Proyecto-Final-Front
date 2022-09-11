import { Component, OnInit } from '@angular/core';
import { CategoriaSkill } from 'src/app/models/CategoriaSkill.model';
import { Skill } from 'src/app/models/Skill.model';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
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
  

  constructor(private skillService: SkillService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
      this.skillService.getSkills().subscribe(data => {    
      this.conocimientos = data;
      } );

      this.skillService.getCateSkills().subscribe(data => {    
      this.categorias = data;
      } );
  }

  public filtrarPorCategoria(id: number | undefined): Skill[]{
    this.conocimientosFiltrados = this.conocimientos.filter(skill => skill.catSkill.idCatSkill==id)
    return this.conocimientosFiltrados;
  }

  renderizar(){
    this.skillService.getSkills().subscribe(data => {    
      this.conocimientos = data;
    } );

      this.skillService.getCateSkills().subscribe(data => {    
      this.categorias = data;  
    } );
  }

  guardarSkill(skill: Skill){
    this.skillActual=skill;
  }

  guardarCategoriaSkill (catSkill: CategoriaSkill){
    this.catSkillActual = catSkill;
  }

  estaLogueado(){
    return this.autenticacionService.isLoggedIn();
}
}
