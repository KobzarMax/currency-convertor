import Currency from './Currency'

class CurrencyFactory {
	cur: any
	create(type: string, inpV: number, kurs: number): any {
		this.cur = new Currency(type, inpV, kurs)
		return this.cur
	}
	getValue() {
		this.cur.getValue()
	}
}

export default CurrencyFactory
