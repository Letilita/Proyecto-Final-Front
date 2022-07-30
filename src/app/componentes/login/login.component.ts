import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  registros: any;
  error: Boolean = false;
  dismiss: String = "";
  
  

  constructor( private datos: DataService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {    
    this.registros = data;
    
      
  } );
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    console.log(this.registros.email);
    console.log(this.registros.password);
    if(this.email==this.registros.email && this.password==this.registros.password) {
      this.datos.setLogueado(true);
      this.dismiss="modal"
      


    } else {
      this.error=true;

    }

  }

}
