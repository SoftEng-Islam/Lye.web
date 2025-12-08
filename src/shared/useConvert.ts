// Unit Conversion Utility
type Unit = 'g' | 'kg' | 'oz' | 'lb'
// Conversion factors relative to grams
const factors: Record<Unit, number> = { g: 1, kg: 1000, oz: 28.3495, lb: 453.592 }
export function convert(value: number, from: Unit): Record<Unit, number> {
	// Convert the input to grams first
	const valueInGrams: number = value * factors[from]
	return {
		g: valueInGrams,
		kg: valueInGrams / 1000,
		oz: valueInGrams / 28.3495,
		lb: valueInGrams / 453.592,
	}
}

// const result = convert(100, 'kg')
// console.log(result);
