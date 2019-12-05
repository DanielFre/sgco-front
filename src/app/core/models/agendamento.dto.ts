import { FuncionarioGetDTO } from "./funcionario-get.dto"
import { PacienteGetDTO } from "./paciente-get.dto"

export interface AgendamentoDTO {
    id: string;
    anamnese?: string;
    diagnostico?: string;
    dataHoraInicio: string;
    dataHoraFim: string;
    observacao: string;
    status: string;
    paciente: PacienteGetDTO;
    funcionario: FuncionarioGetDTO;
}