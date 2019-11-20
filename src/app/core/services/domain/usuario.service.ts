import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuarioPerfilDTO } from "app/core/models/usuario-perfil.dto";
import { API_CONFIG } from "config/api.config";
import { StorageService } from "../storage.service";
import { PermissaoDTO } from "app/core/models/permissao.dto";

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) { }

    public findPerfil(email: string): Observable<UsuarioPerfilDTO> {
        return this.http.get<UsuarioPerfilDTO>(`${API_CONFIG.baseUrl}/perfil/${email}`);
    }

    public findPermissoes(): Observable<PermissaoDTO[]> {
        return this.http.get<PermissaoDTO[]>(`${API_CONFIG.baseUrl}/usuarios/permissoes/buscar`)
    }

    public uploadImage(image: File) {
        const formData = new FormData();

        formData.append('file', image);

        return this.http.post(
            `${API_CONFIG.baseUrl}/usuarios/imagem/upload`,
            formData,
            {
                observe: 'response',
                responseType: 'json'
            }
        );
    }

    public downloadImage(fileName: string): Observable<Blob> {
        return this.http.get(`${API_CONFIG.baseUrl}/usuarios/imagem/download/${fileName}`, { responseType: 'blob' });
    }

}