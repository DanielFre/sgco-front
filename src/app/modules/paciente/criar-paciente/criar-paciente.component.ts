import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.scss']
})
export class CriarPacienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public cancelCreatePaciente() {
    this.router.navigateByUrl('/pacientes/listar');
  }
  public CreatePaciente()  {
    
    this.router.navigateByUrl('/pacientes/listar');
    
  }

}