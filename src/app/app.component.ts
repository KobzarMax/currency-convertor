import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { ApiService } from './services/api.service'

import { ICurencyInfo } from './interfaces/ICurrencyInfo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private service: ApiService) {}
	currencyInfo$: Observable<ICurencyInfo[]> | undefined

	ngOnInit(): void {
		this.currencyInfo$ = this.service.getCurrentCurrency()
	}
}
