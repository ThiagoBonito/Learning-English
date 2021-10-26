import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';


@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativas: number = 3

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnChanges(): void{
    if(this.tentativas != this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas // EX: 3 - 2 = 1
      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit(): void {
    
  }
  

}
