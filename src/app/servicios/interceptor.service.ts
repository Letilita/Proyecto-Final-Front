import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionesService: AutenticacionService, private spinnerService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.showSpinner();
    var currentUser= this.autenticacionesService.UsuarioAutenticado
    if(currentUser && currentUser.accessToken){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    return next.handle(req).pipe(
      finalize(() => this.spinnerService.hideSpinner())
    );
  }
}
