import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  miPorfolio: any;

  constructor(private datos: DataService) { }

  ngOnInit(): void {

    this.datos.obtenerDatos().subscribe(data => {
      
      this.miPorfolio = data;

  } );
    
  }

}
