import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.usuario = currentUser;
  }

  /**
   * url do endpoint de onde pega o usuario para login
   */
  url = 'https://sample-inflr.herokuapp.com/api';

  public token: string;
  public usuario;


  /**
   *
   * Faz login com usuario e senha cadastrados em um server (Mudar metodo no HTML se for testar)
   * LOGIN: andredff
   * SENHA: 123456
   *
   */
  public login(usuario) {
    return this.http
      .post(this.url + '/accounts/login/', usuario, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .map(usuario => {
        if (usuario) {
          localStorage.setItem('currentUser', JSON.stringify(usuario));
        }
        this.usuario = usuario;
        return usuario;
      });
  }

  public loginNoAuth(usuario) {
    this.usuario = usuario;
    return usuario;
  }

  /**
   *
   * Logout da aplicação
   *
   */
  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
