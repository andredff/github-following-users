import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListagemService {

  constructor(private http: HttpClient) { }

  /**
   * url do endpoint para listar usuario no GITHUB
   */
  url = 'http://api.github.com/users/';

  /**
   * Lista usuarios que estou seguindo no GITHUB
   */
  getList() {
    const user = 'andredff';
    return this.http.get(this.url + user + '/following');
  }
}
