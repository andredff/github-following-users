import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: any;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.createform();
  }

  /**
   *
   * Metodo para criar controles do formuário
   *
   */
  createform() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  /**
   *
   * Faz login fake apenas com metódo apontando para rota
   *
   */
  loginNoAuth() {
    this.loginService.loginNoAuth(this.form.value);
    this.router.navigate(['/home']);
  }

  /**
   *
   * Faz login com usuario e senha cadastrados em um server (Mudar metodo no HTML se for testar)
   * LOGIN: andredff
   * SENHA: 123456
   *
   */
  login() {
    this.usuario = this.form.value;
    this.loginService.login(this.usuario).subscribe(
      ret => {
        ret = ret;
        this.router.navigate(['/home']);
      },
      error => {
        alert('Usuário ou senha inválido!');
      }
    );
  }


}
