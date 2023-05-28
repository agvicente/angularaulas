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
  'Sou nascido e criado em Belo Horizonte, formado Engenharia Eletronica e de Telecomunicação pela Pontifícia Unicersidade Católica de minas Gerais. Atualmente faço pós graduação em Arquitetura de Software Distribuido na mesma instituição. A médio prazo pretendo me tornar lider técnico em uma empresa ou startup, e a longo prazo penso em empreender na área de tecnologia, agregando todo o conhecimento que tive nas formações. Durante o percurso pretendo também fazer um mestrado em Engenharia na Universidade Federal de Minas Gerais.'
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
