import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  public todosProdutos : any
  constructor(private dados : ServiceService) {
    this.todosProdutos = this.dados.enviarTodosProdutos()
   }

  ngOnInit() {
  }

}
