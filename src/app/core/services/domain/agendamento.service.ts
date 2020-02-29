import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { AgendamentoDTO } from "app/core/models/agendamento.dto";
import { Observable } from "rxjs";

@Injectable()
export class AgendamentoService {

    constructor(public http: HttpClient) { }

    public findAll(): Observable<AgendamentoDTO[]> {
        return this.http.get<AgendamentoDTO[]>(`${API_CONFIG.baseUrl}/agenda`)
    }
    public findById(id): Observable<AgendamentoDTO>{
        return this.http.get<AgendamentoDTO>(`${API_CONFIG.baseUrl}/agenda/${id}`)
    }
    
    public insert(obj: AgendamentoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/agendamentos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
    public update(obj: AgendamentoDTO, id: string) {
        return this.http.put(
            `${API_CONFIG.baseUrl}/agendamentos/${id}`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}