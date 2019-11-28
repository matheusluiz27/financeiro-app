import { Login } from './../../models/Login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service/auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  private login = new Login();

  logar() {
      const response = this.authService.login(this.login)
      response.then(token => {
        localStorage.setItem('token', JSON.stringify(token['token']))
        this.router.navigate(['/home'])
      }).catch(erro => {
        this.toastr.error("Login Inválido")
      })
  }
}
