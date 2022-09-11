import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-barra-navegadora',
  templateUrl: './barra-navegadora.component.html',
  styleUrls: ['./barra-navegadora.component.css']
})
export class BarraNavegadoraComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, private rutas: Router) { }

  ngOnInit(): void {
  }

  estaLogueado(): Boolean{
    return this.autenticacionService.isLoggedIn();
  }

  logout(){
    this.autenticacionService.cerrarSesion();
    this.estaLogueado();
    this.rutas.navigate(['/'])
  }
}
