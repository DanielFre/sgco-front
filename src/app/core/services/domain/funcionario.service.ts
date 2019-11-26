import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { TipoFuncionarioDTO } from "app/core/models/tipo-funcionario.dto";
import { Observable } from "rxjs";
import { FuncionarioDTO } from "app/core/models/funcionario.dto";
import { FuncionarioGetDTO } from "app/core/models/funcionario-get.dto";

@Injectable()
export class FuncionarioService {

    constructor(public http: HttpClient) { }

    public findTipos(): Observable<TipoFuncionarioDTO[]> {
        return this.http.get<TipoFuncionarioDTO[]>(`${API_CONFIG.baseUrl}/funcionarios/tipos`)
    }

    public findByFilter(nome: string, situacao: boolean, page: number, linesPerPage: number, orderBy: string, direction: string): Observable<FuncionarioGetDTO[]> {
        let parametros: string = `?nome=${nome ? nome : ''}&ativo=${situacao ? situacao : ''}`;
        parametros += `&page=${page}&linesPerPage=${linesPerPage}&orderBy=${orderBy}&direction=${direction}`;

        return this.http.get<FuncionarioGetDTO[]>(`${API_CONFIG.baseUrl}/funcionarios/${parametros}`)
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