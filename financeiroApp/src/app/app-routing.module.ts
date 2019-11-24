import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./components/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'cadastro-movimentacao',
    loadChildren: () => import('./components/cadastro-movimentacao/cadastro-movimentacao.module').then( m => m.CadastroMovimentacaoPageModule)
  },
  {
    path: 'movimentacoes',
    loadChildren: () => import('./components/movimentacoes/movimentacoes.module').then( m => m.MovimentacoesPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./components/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'cadastro-movimentacao',
    loadChildren: () => import('./components/cadastro-movimentacao/cadastro-movimentacao.module').then( m => m.CadastroMovimentacaoPageModule)
  },
  {
    path: 'movimentacoes',
    loadChildren: () => import('./components/movimentacoes/movimentacoes.module').then( m => m.MovimentacoesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
