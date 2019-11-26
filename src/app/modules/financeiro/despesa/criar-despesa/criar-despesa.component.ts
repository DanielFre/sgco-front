import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-despesa',
  templateUrl: './criar-despesa.component.html',
  styleUrls: ['./criar-despesa.component.scss']
})
export class CriarDespesaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public CancelCreateDespesa() {
    this.router.navigateByUrl('/financeiro/despesas/listar');
  }
  public CreateDespesa()  {
    
    this.router.navigateByUrl('/financeiro/despesas/listar');
    
  }
}