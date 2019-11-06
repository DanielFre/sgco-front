import { EnderecoDTO } from "./endereco.dto";
import { ContatoDTO } from "./contato.dto";

export interface UsuarioPerfilDTO {
    email: string;
    imagem?: string;
    nome: string;
    cpf: string;
    rg: string;
    sexo: string;
    nascimento: string;
    crmCro: string;
    tipo: string;

    endereco: EnderecoDTO;
    contato: ContatoDTO;
}