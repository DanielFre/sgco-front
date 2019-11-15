import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { CidadeDTO } from "app/core/models/cidade.dto";
import { Observable } from "rxjs";

@Injectable()
export class CidadeService {

    constructor(public htpp: HttpClient) { }

    public findAll(idEstado: string): Observable<CidadeDTO[]> {
        return this.htpp.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${idEstado}/cidades`)
    }
}