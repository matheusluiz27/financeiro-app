import { CaixaInfoServiceService } from './../../services/caixa-info-service/caixa-info-service.service';
import { MovimentacaoServiceService } from './../../services/movimentacao-service/movimentacao-service.service';
import { Movimentacao } from './../../models/Movimentacao';
import { Component, OnInit } from '@angular/core';
import { CaixaInfo } from 'src/app/models/CaixaInfo';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.page.html',
  styleUrls: ['./movimentacoes.page.scss'],
})
export class MovimentacoesPage implements OnInit {

  constructor(private movimentacaoService: MovimentacaoServiceService, private caixaInfoServiceService: CaixaInfoServiceService) { }

  ngOnInit() {
    this.getCaixaInfoPorMes(new Date);
    this.getMovimentacoes(new Date)
  }

  private movimentacoes =  Array<Movimentacao>();

  private caixaInfo = new CaixaInfo();

  private data: any;

  getMovimentacoes(data) {
    const response = this.movimentacaoService.buscarMovimentacaoPorMes(data);
    response.then(movimentacoes => {
      this.movimentacoes = movimentacoes;
    })
  }

  getCaixaInfoPorMes(data) {
    const response = this.caixaInfoServiceService.getCaixaInfoPorMes(data);
    response.then(caixaInfo => {
      this.caixaInfo = caixaInfo;
    })
  }

  buscarPorMes(){
    this.getCaixaInfoPorMes(this.data);
    this.getMovimentacoes(this.data);
  }

}
