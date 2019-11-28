import { ToastrService } from 'ngx-toastr';
import { MovimentacaoServiceService } from './../../services/movimentacao-service/movimentacao-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movimentacao } from 'src/app/models/Movimentacao';

@Component({
  selector: 'app-cadastro-movimentacao',
  templateUrl: './cadastro-movimentacao.page.html',
  styleUrls: ['./cadastro-movimentacao.page.scss'],
})
export class CadastroMovimentacaoPage implements OnInit {

  constructor(private router: Router, private movimentacaoService: MovimentacaoServiceService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  private movimentacao = new Movimentacao();

  cadastrar() {
    const response = this.movimentacaoService.criarMovimentacao(this.movimentacao);
    response.then(movimentacao => {
      this.toastr.success("Movimentacao registrada co sucesso")
    }).catch(erro => {
      this.toastr.error("Falha ao cadastrar movimentacao")
    })
  }
}
