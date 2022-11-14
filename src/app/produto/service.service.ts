import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService { 


  constructor(
    private storage : Storage,
  ) {}
    enviarTodosProdutos(){
    let formulario: Produto[] = [];
    this.storage.forEach((valor : string) => {const produto : Produto = JSON.parse(valor); formulario.push(produto)});
    return formulario;
      }
    async filtrarDados(id: string){
      return JSON.parse(await this.storage.get(id))
    }
    recebeDados(dadosRecebidos : Produto){
      dadosRecebidos.id = Guid.create()
      this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
    }
    deletaDados(id: string){
      this.storage.remove(id)
    }
    inserir (argumento : Produto){
      argumento.id = Guid.create()
      this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
    }
    async listarTodos(){
      let formulario: Produto[] = [];
      await this.storage.forEach((value: string) => {
        const produto: Produto = JSON.parse(value); formulario.push(produto)})
    }
    AlterarProduto(id: string, dadosRecebidos:Produto){
      dadosRecebidos.id = Guid.parse(id)
      this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
      
    }
}
