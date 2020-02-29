import { EnderecoDTO } from "./endereco.dto"
import { ContatoDTO } from "./contato.dto"
import { UsuarioDTO } from "./usuario.dto"

export interface FuncionarioDTO {
    id?: number;
    nome: string;
    cpf: string;
    rg: string;
    sexo: string;
    ativo: boolean;
    nascimento: string;
    tipo: number;
    corAgenda: string;
    crmCro: string;
    endereco: EnderecoDTO;
    contato: ContatoDTO;
    usuario?: UsuarioDTO;
}