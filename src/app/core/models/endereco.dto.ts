export interface EnderecoDTO {
    id?: number;
    logradouro: string;
    bairro: string;
    numero: string;
    cep: string;
    complemento: string;
    idCidade: number;
    cidade?: string;
    estado?: string;
    pais?: string;
}