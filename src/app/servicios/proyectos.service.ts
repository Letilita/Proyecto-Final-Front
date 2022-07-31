import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/Proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>( this.apiServerUrl + '/Proyectos/todos');
  }

  public updateProyecto(proyecto: Proyecto): Observable<any>{

    return this.http.put<Proyecto>(`${this.apiServerUrl}/Proyectos/editar`, proyecto);
  } 

  public createProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.post<Proyecto>(this.apiServerUrl + '/Proyectos/agregar', proyecto);
  }

  public deleteProyecto(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/Proyectos/eliminar/' + id);
  }
}
