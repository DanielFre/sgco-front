import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteDTO } from 'app/core/models/paciente.dto';
import { PacienteService } from 'app/core/services/domain/paciente.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';

@Component({
  selector: 'app-criar-paciente',
  templateUrl: './criar-paciente.component.html',
  styleUrls: ['./criar-paciente.component.scss']
})
export class CriarPacienteComponent implements OnInit {

  pacientes: PacienteDTO[];
  formGroup: FormGroup;
  constructor(public formBuilder: FormBuilder, private pacienteService: PacienteService, private router: Router) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      valor: ['', [Validators.required]],
      ativo: [true]
    });

  }

  @ViewChild('dialog', null)
  private dialog: SwalComponent;

  ngOnInit() {
  }
  public cancelCreatePaciente() {
    this.router.navigateByUrl('/pacientes/listar');
  }
  public CreatePaciente() {


    let aux = this.formGroup.value;

    let paciente: PacienteDTO = {

      nome: aux.nome,
      cpf: aux.cpf,
      rg: aux.rg,
      sexo: aux.sexo,
      ativo: aux.ativo,
      nascimento: aux.nascimento,
      endereco: aux.endereço,
      contato: aux.contato,

    };

    this.pacienteService.insert(paciente)
      .subscribe(response => {
        let options = {
          title: "Sucesso!",
          text: "Paciente " + paciente.nome + " foi adicionado com sucesso!",
          type: 'success',
        } as SweetAlertOptions;

        this.dialog.update(options);
        this.router.navigateByUrl('pacientes/listar');
        this.dialog.fire();

      }, error => {
        switch (error.status) {
          case 401:
            break;
          default:
            let options = {
              title: "Erro " + error.status + ((error.error) ? ": " + error.error : ""),
              text: (error.message) ? error.message : error.msg,
            } as SweetAlertOptions;

            this.dialog.update(options);
            this.dialog.fire();
        }

      });

  }

}