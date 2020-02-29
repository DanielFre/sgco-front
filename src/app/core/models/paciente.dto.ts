import { EnderecoDTO } from "./endereco.dto"
import { ContatoDTO } from "./contato.dto"

export interface PacienteDTO {
    id?: string;
    nome: string;
    cpf: string;
    rg: string;
    sexo: string;
    ativo: boolean;
    nascimento: string;
    endereco: EnderecoDTO;
    contato: ContatoDTO;
    
}
