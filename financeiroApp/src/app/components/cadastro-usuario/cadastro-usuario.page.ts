import { ToastrService } from 'ngx-toastr';
import { UsuarioServiceService } from './../../services/usuario-service/usuario-service.service';
import { Login } from './../../models/Login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioServiceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  private usuario = new Login();
  private senhaConfirmada: String;

  cadastrar() {
    if(this.usuario.senha != this.senhaConfirmada) {
      this.toastr.error("Confirmação da senha inválida")
      return
    }

    const response = this.usuarioService.cadastrarUsuario(this.usuario)
    response.then(usuario => {
      this.toastr.success("Usuario cadastrado com sucesso!")
      this.router.navigate(['/login'])
    }).catch(erro => {
      this.toastr.error("Não foi possível cadastrar o usuario")
    })
  }
}

