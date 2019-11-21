import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit() {
  }
  public cancelCreateConta() {
    this.router.navigateByUrl('/financeiro/contas/listar');
  }
  public CreateConta()  {
    
    this.router.navigateByUrl('/financeiro/contas/listar');
    
  }
}
