import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UsuarioPerfilDTO } from "app/core/models/usuario-perfil.dto";
import { API_CONFIG } from "config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient, public storage: StorageService) { }

    public findPerfil(email: string): Observable<UsuarioPerfilDTO> {
        return this.http.get<UsuarioPerfilDTO>(`${API_CONFIG.baseUrl}/perfil/${email}`);
    }

}