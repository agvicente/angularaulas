import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title = 'angularaulas';

  nomes = [
    new Pessoa(1, 'Augusto', 26),
    new Pessoa(2, 'Jão', 33),
    new Pessoa(3, 'Carina', 11)

  ];

  nomePrincipal = this.nomes[0];
}
