import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { ProcedimentoDTO } from "app/core/models/procedimento.dto";
import { Observable } from "rxjs";

@Injectable()
export class ProcedimentoService {

    constructor(public http: HttpClient) { }

    public findAll(): Observable<ProcedimentoDTO[]> {
        return this.http.get<ProcedimentoDTO[]>(`${API_CONFIG.baseUrl}/procedimentos`)
    }

    public findByFilter(nome: string, situacao: boolean, page: number, linesPerPage: number, orderBy: string, direction: string): Observable<ProcedimentoDTO[]> {
        let parametros: string = `?nome=${nome ? nome : ''}&ativo=${situacao ? situacao : ''}`;
        parametros += `&page=${page}&linesPerPage=${linesPerPage}&orderBy=${orderBy}&direction=${direction}`;

        return this.http.get<ProcedimentoDTO[]>(`${API_CONFIG.baseUrl}/procedimentos/page/${parametros}`)
    }

    public findById(id): Observable<ProcedimentoDTO>{
        return this.http.get<ProcedimentoDTO>(`${API_CONFIG.baseUrl}/procedimentos/${id}`)
    }
    
    public insert(obj: ProcedimentoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/procedimentos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
    public update(obj: ProcedimentoDTO, id: string) {
        return this.http.put(
            `${API_CONFIG.baseUrl}/procedimentos/${id}`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}