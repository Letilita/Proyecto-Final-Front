import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public logueado: Boolean = false;

  constructor( private http: HttpClient) { 
    
  }
  obtenerDatos(): Observable<any> {
    return this.http.get('assets/data/data.json')
  }

  public setLogueado(valor: Boolean){
    this.logueado= valor;
  }
}
