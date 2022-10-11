import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root'
})
export class CurentCurrencyService {
	constructor() {}

	currencyArr = []

	сurrencyValueObj = {}

	getCurrencyValueObj(req: any) {
		req.subscribe((data: any) => {
			this.currencyArr = data
			this.createObjWithCurrencyValue()
		})
		return this.сurrencyValueObj
	}

	createObjWithCurrencyValue() {
		this.currencyArr.map(({ ccy, buy }) => {
			const c = ccy
			const v = buy
			this.сurrencyValueObj[c] = v
		})
	}
}
