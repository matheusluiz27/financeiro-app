import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-movimentacao',
  templateUrl: './cadastro-movimentacao.page.html',
  styleUrls: ['./cadastro-movimentacao.page.scss'],
})
export class CadastroMovimentacaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    this.router.navigate(['/home'])
  }
}
