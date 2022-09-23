import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mail } from 'src/app/models/Mail.model';
import { Usuario } from 'src/app/models/Usuario.model';
import { MailSenderService } from 'src/app/servicios/mail-sender.service';
import { PortadaService } from 'src/app/servicios/portada.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public usuario: Usuario | undefined;

  email!: String;
  nombre!: String;
  body!: String;
  myModal = document.getElementById('confirmacionEnvio');
  mostrarConfirmacion: Boolean = false;

  mailForm!: FormGroup;
  

  constructor(private usuarioService: PortadaService, private formBuilder: FormBuilder, private mailSender: MailSenderService, private router: Router) { }

  ngOnInit(): void {

    this.usuarioService.getUsuario().subscribe(data => {
      
      this.usuario = data;

    } );

    this.mailForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        body: ['', [Validators.required]]

      }
    ) 
    
  }

  get Email(){
    return this.mailForm.get('email')
  }

  get Nombre(){
    return this.mailForm.get('nombre')
  }

  get Body(){
    return this.mailForm.get('body')
  }

  enviar(event: Event){
    event.preventDefault;
    const { nombre, email, body} = this;
    const correo: Mail = { nombre: nombre, fromEmail: email, body: body};
    this.mailSender.enviarMail(correo).subscribe(()=>{
      console.log("El mail enviado es", correo);
      this.mostrarConfirmacion = true;    
      
      setTimeout(()=>{
        this.mostrarConfirmacion = false;
      }, 8000
      )
     this.mailForm.reset();
    }, err => {
      alert("No se pudo enviar el mensaje")
    })  
    

  }

  


}
