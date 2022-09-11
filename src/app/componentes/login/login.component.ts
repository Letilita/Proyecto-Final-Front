import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  dismiss: String = "";
  
  
  form!: FormGroup;

  constructor( private formBuilder: FormBuilder, private autenticacionService: AutenticacionService) { }

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
      console.log("El usuarioAutenticado es", this.autenticacionService.isLoggedIn()) //si logueado
    }, err => {
      console.log("No se logueo: "+ err.status)  // si error
    })  
  }

}
