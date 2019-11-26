import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcedimentoDTO } from 'app/core/models/procedimento.dto';
import { ProcedimentoService } from 'app/core/services/domain/procedimento.service';

@Component({
  selector: 'app-criar-procedimento',
  templateUrl: './criar-procedimento.component.html',
  styleUrls: ['./criar-procedimento.component.scss']
})
export class CriarProcedimentoComponent implements OnInit {

  procedimentos: ProcedimentoDTO[];
  formGroup: FormGroup;
  constructor(public formBuilder: FormBuilder, private procedimentoService: ProcedimentoService) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      valor: [''],
      ativo: [true]
    });

  }

  ngOnInit() {
  }

  cadastrar() {
    let aux = this.formGroup.value;

    let procedimento: ProcedimentoDTO = {
      nome: aux.nome,
      valor: aux.valor,
      ativo: aux.ativo
    };

    this.procedimentoService.insert(procedimento)
      .subscribe(response => {
        console.log("n pode c");
      }, error => {
        console.log(error);
      });

  }
}
