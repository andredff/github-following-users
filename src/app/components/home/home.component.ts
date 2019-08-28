import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/user.model';
import { USERS } from '../../shared/user-mock';
import { LoginService, ListagemService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  public users: User[] = USERS;
  display = false;
  usuario: string;
  followingUsers;

  constructor(private loginService: LoginService, private listagemService: ListagemService, private router: Router) { }

  ngOnInit() {
    // this.usuario = this.loginService.usuario.username;
    this.getList();
  }

  /**
   * Lista usuarios que eu estou seguindo com API do GITHUB
   */
  getList() {
    this.listagemService.getList().subscribe(data => {
      this.followingUsers = data;
      console.log(this.followingUsers);
    });
  }

  /**
   * Pesquisa usuarios na lista que eu estou seguindo com API do GITHUB
   */
  pesquisa() {
    let input;
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    input = document.getElementById('pesquisaInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('userTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
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
