import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { EstadoDTO } from "app/core/models/estado.dto";
import { Observable } from "rxjs";

@Injectable()
export class EstadoService {

    constructor(public htpp: HttpClient) { }

    public findAll(idPais: string): Observable<EstadoDTO[]> {
        return this.htpp.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/paises/${idPais}/estados`)
    }
}