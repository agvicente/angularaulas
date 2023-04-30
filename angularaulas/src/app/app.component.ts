import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title = 'angularaulas';

  nomes = [
    {nome:'Augusto', idade:26},
    {nome:'Paulo', idade:20},
    {nome:'Fulano', idade:55}
  ];

  nomePrincipal = this.nomes[0];
}
