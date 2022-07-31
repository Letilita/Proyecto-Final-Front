import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaSkill } from '../models/CategoriaSkill.model';
import { Skill } from '../models/Skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>( this.apiServerUrl + '/Skills/todas');
  }

  public updateSkill(skill: Skill): Observable<any>{

    return this.http.put<Skill>(`${this.apiServerUrl}/Skills/editar`, skill);
  } 

  public createSkill(skill: Skill): Observable<any>{
    return this.http.post<Skill>(this.apiServerUrl + '/Skills/agregar', skill);
  }

  public deleteSkill(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/Skills/eliminar/' + id);
  }

  // Metodos para las categorias de Skills
  public getCateSkills(): Observable<CategoriaSkill[]>{
    return this.http.get<CategoriaSkill[]>( this.apiServerUrl + '/CategoriasSkill/todos');
  }

  public updateCateSkill(cateSkill: CategoriaSkill): Observable<any>{

    return this.http.put<CategoriaSkill>(`${this.apiServerUrl}/CategoriasSkills/editar`, cateSkill);
  } 

  public createCateSkill(cateSkill: CategoriaSkill): Observable<any>{
    return this.http.post<CategoriaSkill>(this.apiServerUrl + '/CategoriasSkill/agregar', cateSkill);
  }

  public deleteCateSkill(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/CategoriasSkill/eliminar/' + id);
  }

}
