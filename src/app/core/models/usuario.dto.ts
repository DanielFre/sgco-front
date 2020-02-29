export interface UsuarioDTO {
    login: string;
    senha: string;
    ativo: boolean;
    imagem: string;
    permissoes: number[];
}