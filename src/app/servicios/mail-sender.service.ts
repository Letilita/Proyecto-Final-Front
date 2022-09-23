import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mail } from '../models/Mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public enviarMail(mail: Mail): Observable<any>{
    return this.http.post<Mail>(this.apiServerUrl + '/Mail/enviar', mail);
  }
}
