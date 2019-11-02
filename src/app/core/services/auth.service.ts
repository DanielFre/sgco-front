import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { API_CONFIG } from 'config/api.config';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(public http: HttpClient) { }

	public authenticate(creds: CredenciaisDTO) {
		return this.http.post(`
			${API_CONFIG.baseUrl}/login`,
			creds,
			{
				observe: 'response',
				responseType: 'text'
			}
		);
	}
}
