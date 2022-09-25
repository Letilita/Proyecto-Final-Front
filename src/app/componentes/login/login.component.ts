import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


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
  noAutenticado: Boolean = false
  
  form!: FormGroup;

  constructor( private formBuilder: FormBuilder, private autenticacionService: AutenticacionService, private rutas: Router ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]], 
      }
    )  
  }

  get Email(){
    return this.form.get('email')
  }

  get Password(){
    return this.form.get('password')
  }

  login(event: Event){
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(()=>{
      console.log("El usuarioAutenticado es", this.autenticacionService.isLoggedIn());
      this.noAutenticado = false;      
      this.form.reset(); //si logueado        
      //this.rutas.navigate(['/']);
      window.location.reload();
    }, err => {
      this.noAutenticado = true;
      console.log("No se logueo: "+ err.message)  // si error
    })  
  }

}
