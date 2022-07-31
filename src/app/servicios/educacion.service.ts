import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoriaEducacion } from '../models/CategoriaEducacion.model';
import { Educacion } from '../models/Educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducaciones(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>( this.apiServerUrl + '/Educacion/todos');
  }

  public updateEducacion(edu: Educacion): Observable<any>{

    return this.http.put<Educacion>(`${this.apiServerUrl}/Educacion/editar`, edu);
  } 

  public createEducacion(edu: Educacion): Observable<any>{
    return this.http.post<Educacion>(this.apiServerUrl + '/Educacion/agregar', edu);
  }

  public deleteEducacion(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/Educacion/eliminar/' + id);
  }

  // Metodos para las categorias de Educacion
  public getCateEducacion(): Observable<CategoriaEducacion[]>{
    return this.http.get<CategoriaEducacion[]>( this.apiServerUrl + '/CategoriasEducacion/todos');
  }

  public updateCateEducacion(cateEdu: CategoriaEducacion): Observable<any>{

    return this.http.put<CategoriaEducacion>(`${this.apiServerUrl}/CategoriasEducacion/editar`, cateEdu);
  } 

  public createCateEducacion(cateEdu: CategoriaEducacion): Observable<any>{
    return this.http.post<CategoriaEducacion>(this.apiServerUrl + '/CategoriasEducacion/agregar', cateEdu);
  }

  public deleteCateEducacion(id: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl + '/CategoriasEducacion/eliminar/' + id);
  }

}
