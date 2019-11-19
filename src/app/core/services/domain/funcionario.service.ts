import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { TipoFuncionarioDTO } from "app/core/models/tipo-funcionario.dto";
import { Observable } from "rxjs";
import { FuncionarioDTO } from "app/core/models/funcionario.dto";

@Injectable()
export class FuncionarioService {

    constructor(public http: HttpClient) { }

    public findTipos(): Observable<TipoFuncionarioDTO[]> {
        return this.http.get<TipoFuncionarioDTO[]>(`${API_CONFIG.baseUrl}/funcionarios/tipos`)
    }

    public insert(obj: FuncionarioDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/funcionarios`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}