class Currency {
	currencyType: string
	kurs: number
	inputValue: number
	constructor(currencyType: string, kurs: number, inputValue: number) {
		this.kurs = kurs
		this.inputValue = inputValue
		this.currencyType = currencyType
	}
	getValue(): number {
		return this.kurs / this.inputValue
	}
}
export default Currency
