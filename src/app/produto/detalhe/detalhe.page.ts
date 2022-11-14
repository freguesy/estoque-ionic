import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { Guid } from 'guid-typescript';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  public todosProdutos : Produto;
  public modoDeEdicao = false
  formulario: FormGroup;
  public arrayPessoa : any

  constructor(
    private router: Router,
    private alertController: AlertController,
    private route : ActivatedRoute,
    private Produto : ServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    if (id != 'add'){
      //this.todosContatos = 
      this.Produto.filtrarDados(id).then(array => this.todosProdutos= array)
    } else{
      this.modoDeEdicao = true
  }

  this.todosProdutos = {id:Guid.createEmpty(), nome: "", quantidade: "", preco:""}

  this.formulario = this.formBuilder.group({
    id: [this.todosProdutos.id],
    nome: [this.todosProdutos.nome, [Validators.required]],
    quantidade: [this.todosProdutos.quantidade, [Validators.required]],
    preco: [this.todosProdutos.preco, [Validators.required]],
  })

}


  
  iniciarEdicao(){
    this.modoDeEdicao = true
  }

  encerrarEdicao(){
    const id: string = String(this.route.snapshot.paramMap.get('id'))

    if(id != 'add'){

      this.Produto.AlterarProduto(id,this.formulario.value)
    
      this.modoDeEdicao = false
    //}
  }
    else{
      this.Produto.recebeDados(this.formulario.value)
      this.modoDeEdicao = false
    }}

  deletarServico(){
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    this.Produto.deletaDados(id)
    this.router.navigate(['/lista/']).then(() => {
      window.location.reload();
    });}


      async presentAlert() {
        const alert = await this.alertController.create({
          header: 'Deseja exluir o produto?',
          buttons: [
            {
              text: 'não',
              role: 'cancel',
            },
            {
              text: 'sim',
              role: 'confirm',
              handler: () => {
                this.deletarServico();
            },
          },
        ],
      });
      await alert.present();
  
}
}
