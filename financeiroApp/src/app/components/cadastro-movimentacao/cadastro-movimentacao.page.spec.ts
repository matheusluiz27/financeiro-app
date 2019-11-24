import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroMovimentacaoPage } from './cadastro-movimentacao.page';

describe('CadastroMovimentacaoPage', () => {
  let component: CadastroMovimentacaoPage;
  let fixture: ComponentFixture<CadastroMovimentacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMovimentacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroMovimentacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
