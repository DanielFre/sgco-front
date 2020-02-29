export interface EnderecoDTO {
    id?: number;
    logradouro: string;
    bairro: string;
    numero: string;
    cep: string;
    complemento: string;
    idCidade: number;
    cidade?: any;
    estado?: string;
    pais?: string;
}