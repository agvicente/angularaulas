import { Component } from '@angular/core';
import { Proprietario } from './proprietario';
import { ItemBlog } from './itemBlog';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})

export class AppComponent {

proprietario: Proprietario = new Proprietario(
  'Augusto Custódio Vicente',
  'Sou nascido e criado em Belo Horizonte, tenho 26 anos e sou formado Engenharia Eletronica e de Telecomunicação pela Pontifícia Unicersidade Católica de minas Gerais. Atualmente faço pós graduação em Arquitetura de Software Distribuido na mesma instituição. A médio prazo pretendo me tornar lider técnico em uma empresa ou startup.'
);

itensBlog: ItemBlog[] = [
  new ItemBlog('5 dicas para a sua carreira profissional', 
  'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor'),
  new ItemBlog('5 dicas para a sua carreira profissional', 
  'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor'),
  new ItemBlog('5 dicas para a sua carreira profissional', 
  'Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor')
]

 
}
