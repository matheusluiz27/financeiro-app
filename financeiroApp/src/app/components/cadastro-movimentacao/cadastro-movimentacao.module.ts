import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroMovimentacaoPageRoutingModule } from './cadastro-movimentacao-routing.module';

import { CadastroMovimentacaoPage } from './cadastro-movimentacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroMovimentacaoPageRoutingModule
  ],
  declarations: [CadastroMovimentacaoPage]
})
export class CadastroMovimentacaoPageModule {}
