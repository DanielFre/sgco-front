import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-receita',
  templateUrl: './criar-receita.component.html',
  styleUrls: ['./criar-receita.component.scss']
})
export class CriarReceitaComponent implements OnInit {

  constructor(private router: Router) { }
 

  ngOnInit() {
  }
  public CancelCreateReceita() {
    this.router.navigateByUrl('/financeiro/receitas/listar');
  }
  public CreateReceita()  {
    
    this.router.navigateByUrl('/financeiro/receitas/listar');
    
  }
}
