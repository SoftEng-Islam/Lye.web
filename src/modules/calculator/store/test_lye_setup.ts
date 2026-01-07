import { createPinia, setActivePinia } from 'pinia'
import { useOilStore } from './calculatorStore'

// Helper to reset store
setActivePinia(createPinia())
const store = useOilStore()

function resetStore() {
	store.RecipeTotal.weightOils = 0
	store.RecipeTotal.weightLye = 0
	store.RecipeTotal.weightWater = 0
	store.AddedOils = []
	store.headerOptions.typeOfLye = 'NaOH'
	store.headerOptions.lyePurity = 100
}

async function runTests() {
	console.log('Running Lye Setup Verification...')

	// Add oil: Olive Oil (NaOH 0.135, assume we add 1000g)
	const oliveOil = store.Oils.find((o) => o.Name.includes('Olive')) || store.Oils[0]
	if (!oliveOil) throw new Error('No oil found')

	// Test 1: NaOH at 100% Purity (Default)
	resetStore()
	console.log(`\nTest 1: NaOH 100% Purity`)
	store.headerOptions.typeOfLye = 'NaOH'
	store.headerOptions.lyePurity = 100
	store.ClickedOil(oliveOil)
	store.AddedOilsWeight(oliveOil.Name, 1000)

	// NaOH SAP = 0.135 * 1000 = 135g
	const expectedNaOH = Math.round(1000 * oliveOil.NaOH)
	console.log(`Lye: ${store.RecipeTotal.weightLye}g (Expected ~${expectedNaOH})`)
	if (Math.abs(store.RecipeTotal.weightLye - expectedNaOH) <= 1) console.log('✅ PASS')
	else console.error('❌ FAIL')

	// Test 2: KOH at 90% Purity (Default for KOH)
	console.log(`\nTest 2: KOH switch sets default 90% and calculates correctly`)
	// When switching to KOH, purity should auto-set to 90
	store.setTypeOfLye('KOH')

	console.log(`Purity: ${store.headerOptions.lyePurity}% (Expected 90)`)

	// KOH SAP = NaOH SAP * 1.403 (approx) or just use oil.KOH
	// Olive KOH ~0.188-0.190. Let's use oil.KOH value
	const pureKOH = 1000 * oliveOil.KOH // approx 190g
	const expectedKOH90 = pureKOH / 0.9 // approx 211g

	console.log(`Lye: ${store.RecipeTotal.weightLye}g (Expected ~${Math.round(expectedKOH90)})`)

	if (
		store.headerOptions.lyePurity === 90 &&
		Math.abs(store.RecipeTotal.weightLye - Math.round(expectedKOH90)) <= 3
	)
		console.log('✅ PASS')
	else console.error('❌ FAIL')

	// Test 3: KOH70 at 70% Purity
	console.log(`\nTest 3: KOH70 switch sets default 70%`)
	store.setTypeOfLye('KOH70')
	console.log(`Purity: ${store.headerOptions.lyePurity}% (Expected 70)`)

	const expectedKOH70 = pureKOH / 0.7 // approx 271g
	console.log(`Lye: ${store.RecipeTotal.weightLye}g (Expected ~${Math.round(expectedKOH70)})`)

	if (
		store.headerOptions.lyePurity === 70 &&
		Math.abs(store.RecipeTotal.weightLye - Math.round(expectedKOH70)) <= 3
	)
		console.log('✅ PASS')
	else console.error('❌ FAIL')

	// Test 4: Manual Purity Adjustment
	console.log(`\nTest 4: Manual Purity Adjustment (KOH at 85%)`)
	store.setTypeOfLye('KOH') // Reset to 90
	store.headerOptions.lyePurity = 85
	store.calcLye() // Trigger recalc

	const expectedKOH85 = pureKOH / 0.85
	console.log(`Lye: ${store.RecipeTotal.weightLye}g (Expected ~${Math.round(expectedKOH85)})`)

	if (Math.abs(store.RecipeTotal.weightLye - Math.round(expectedKOH85)) <= 3) console.log('✅ PASS')
	else console.error('❌ FAIL')
}

runTests().catch((e) => console.error(e))
