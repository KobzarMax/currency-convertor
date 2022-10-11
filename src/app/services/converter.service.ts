import { Injectable } from '@angular/core'
import CurrencyFactory from '../classes/CurrencyFactory'

@Injectable({
	providedIn: 'root'
})
export class ConverterService {
	constructor() {}

	curentCurrencyObj: any = {}

	createCurrentCurrencyObj(obj: Object) {
		this.curentCurrencyObj = obj
	}

	countValue(cur: string, val: number) {
		const valueIpt = val
		const nominalFromSelect = cur
		const curValueFromBanc = +this.curentCurrencyObj[`${nominalFromSelect}`]
		const eksemp = new CurrencyFactory()
		const currency = eksemp.create(nominalFromSelect, valueIpt, curValueFromBanc)
		let resultInSelectedCurrency = currency.getValue().toFixed(2)

		return resultInSelectedCurrency
	}

	convertToUah(cur: string, value: number) {
		const result = value * this.curentCurrencyObj[`${cur}`]
		return result
	}
}
