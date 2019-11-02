import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { ProcedimentoDTO } from "app/core/models/procedimento.dto";
import { Observable } from "rxjs";

@Injectable()
export class ProcedimentoService {

    constructor(public htpp: HttpClient) { }

    public findAll(): Observable<ProcedimentoDTO[]> {
        return this.htpp.get<ProcedimentoDTO[]>(`${API_CONFIG.baseUrl}/procedimentos`)
    }
}