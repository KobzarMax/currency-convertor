import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { CurentCurrencyService } from '../services/current-currency.service'
import { ConverterService } from '../services/converter.service'
import { ICurShortInfo } from '../interfaces/ICurShortInfo'

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	constructor(
		private currencyService: CurentCurrencyService,
		private countService: ConverterService
	) {}

	@Input() curentCurrency: Observable<any> | undefined

	curentCurrencyObj: any = {}

	selectOne = ''
	selectTwo = ''

	inptOneValue = ''
	inputTwoValue = ''

	ngOnInit(): void {
		this.curentCurrencyObj = this.currencyService.getCurrencyValueObj(this.curentCurrency)
		this.countService.createCurrentCurrencyObj(this.curentCurrencyObj)
	}

	onChangeSelect() {
		if (this.selectOne === this.selectTwo) {
			this.inputTwoValue = this.inptOneValue
		}
		if (this.inptOneValue !== '' && this.selectOne === 'UAH') {
			this.countValue(+this.inptOneValue)
			return
		} else {
			let result = this.countService.convertToUah(this.selectOne, +this.inptOneValue)
			this.countValue(result)
		}
	}

	countValue(value: number) {
		if (this.selectTwo === 'UAH') {
			this.inputTwoValue = value.toFixed().toString()
			return
		} else {
			const valueIpt = value
			const nominalFromSelect = this.selectTwo

			const result = this.countService.countValue(nominalFromSelect, valueIpt)
			this.inputTwoValue = result.toString()
		}
	}

	getOneInpValue = (event: Event) => {
		this.inptOneValue = (event.target as HTMLInputElement).value
		if (this.selectOne === this.selectTwo) {
			this.inputTwoValue = this.inptOneValue
		}
		this.checkCur(this.selectOne, +this.inptOneValue)
	}

	getTwoInpValue = (event: Event) => {
		this.inputTwoValue = (event.target as HTMLInputElement).value
		this.updateInpOne()
	}

	updateInpOne() {
		if (this.selectTwo == this.selectOne) {
			this.inptOneValue = this.inputTwoValue
			return
		}
		if (this.selectOne === 'UAH') {
			const changeValue = (
				+this.inputTwoValue * this.curentCurrencyObj[`${this.selectTwo}`]
			).toFixed(2)
			this.inptOneValue = changeValue.toString()
			return
		} else {
			const changeValueUah = (
				+this.inputTwoValue * this.curentCurrencyObj[`${this.selectTwo}`]
			).toFixed(2)
			let convertResult = +changeValueUah / this.curentCurrencyObj[`${this.selectOne}`]
			this.inptOneValue = convertResult.toFixed(2).toString()
		}
	}

	checkCur(cur: string, value: number) {
		if (cur === 'UAH') {
			this.countValue(value)
			return
		} else {
			let result = this.countService.convertToUah(cur, value)
			this.countValue(result)
			return
		}
	}
	change() {
		let newValueSelectTwo = this.selectOne
		let newValueSelectOne = this.selectTwo
		this.selectOne = newValueSelectOne
		this.selectTwo = newValueSelectTwo

		this.onChangeSelect()
	}
}
