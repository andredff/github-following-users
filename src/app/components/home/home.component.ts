import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { USERS } from '../../shared/user-mock';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  public users: User[] = USERS;
  display = false;
  usuario: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    console.log(this.users);
    this.usuario = this.loginService.usuario.username;

  }

  /**
   * Pesquisa do array de usuarios (lista) em Javascript
   */
  pesquisa() {
    let input;
    let filter;
    let ul;
    let li;
    let a;
    let i;
    let txtValue;
    input = document.getElementById('pesquisaInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('users');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }

  /**
   * Volta para página inicial
   */
  goHome() {
    this.router.navigate(['/']);
  }

  /**
   * Mostrar caixa de logout
   *
   */
  displayLogout() {
    this.display = !this.display;
  }

  /**
   * Fazer logout
   */
  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
