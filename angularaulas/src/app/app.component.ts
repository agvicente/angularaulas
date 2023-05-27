import { Component } from '@angular/core';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})

export class AppComponent {
  title = 'Lista de Tarefas';

tarefas: Tarefa[] = [];

adicionarTarefa = (element: HTMLInputElement) => {
  if(element.value == '') return;
  this.tarefas.push(new Tarefa(element.value));
  element.value = '';
}
}
