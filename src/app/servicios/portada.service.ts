import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PortadaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsuario(): Observable<Usuario>{
    return this.http.get<Usuario>( this.apiServerUrl + '/usuario/id/1' )
  }

  public updateUsuario(usuario: Usuario): Observable<any>{

    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/editar`, usuario);
  } 
}
