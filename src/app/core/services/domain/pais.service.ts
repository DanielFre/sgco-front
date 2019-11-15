import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "config/api.config";
import { PaisDTO } from "app/core/models/pais.dto";
import { Observable } from "rxjs";

@Injectable()
export class PaisService {

    constructor(public htpp: HttpClient) { }

    public findAll(): Observable<PaisDTO[]> {
        return this.htpp.get<PaisDTO[]>(`${API_CONFIG.baseUrl}/paises`)
    }
}