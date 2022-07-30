import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  conocimientos: any;

  constructor(private datos: DataService) { }

  ngOnInit(): void {
      this.datos.obtenerDatos().subscribe(data => {    
      this.conocimientos = data.conocimientos;
      console.log(this.conocimientos);
      
  } );
  }

}
