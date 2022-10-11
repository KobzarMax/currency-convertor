import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getCurrentCurrency(): any {
		return this.http.get<any>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5')
	}
}
