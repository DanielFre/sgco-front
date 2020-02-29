import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { Observable } from "rxjs";
import { PacienteDTO } from "app/core/models/paciente.dto";
import { PacienteGetDTO } from "app/core/models/paciente-get.dto";

@Injectable()
export class PacienteService {

    constructor(public http: HttpClient) { }
    
    public findAll(): Observable<PacienteDTO[]> {
        return this.http.get<PacienteDTO[]>(`${API_CONFIG.baseUrl}/pacientes`)
    }

    public findByFilter(nome: string, situacao: boolean, page: number, linesPerPage: number, orderBy: string, direction: string): Observable<PacienteGetDTO[]> {
        let parametros: string = `?nome=${nome ? nome : ''}&ativo=${situacao ? situacao : ''}`;
        parametros += `&page=${page}&linesPerPage=${linesPerPage}&orderBy=${orderBy}&direction=${direction}`;

        return this.http.get<PacienteGetDTO[]>(`${API_CONFIG.baseUrl}/pacientes/${parametros}`)
    }

    public insert(obj: PacienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/pacientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}