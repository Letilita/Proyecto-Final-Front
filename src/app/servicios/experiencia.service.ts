import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/Experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>( this.apiServerUrl + '/Experiencia/todos');
  }

  public updateExperiencia(expLab: Experiencia): Observable<any>{

    return this.http.put<Experiencia>(`${this.apiServerUrl}/Experiencia/editar`, expLab);
  } 

  public createExperiencia(expLab: Experiencia): Observable<any>{
    return this.http.post<Experiencia>(this.apiServerUrl + '/Experiencia/agregar', expLab);
  }

  public deleteExperiencia(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/Experiencia/eliminar/' + id);
  }

}
