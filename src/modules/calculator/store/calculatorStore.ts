import { acceptHMRUpdate, defineStore } from 'pinia'
import OilsAPIJsonFile from '../api/oilsArray'

interface SoapProperties {
	Hardness: number
	Cleansing: number
	Conditioning: number
	Bubbly: number
	Creamy: number
	Iodine: number
	INS: number
	Lauric: number
	Myristic: number
	Palmitic: number
	Stearic: number
	Ricinoleic: number
	Oleic: number
	Linoleic: number
	Linolenic: number
	Saturated: number
	MonoUnsaturated: number
	PolyUnsaturated: number
}

export interface Oil {
	Name: string
	weight?: number
	NaOH: number
	KOH: number
	Hardness: number
	Cleansing: number
	Condition: number
	Bubbly: number
	Creamy: number
	Iodine: number
	INS: number
	Lauric: number
	Myristic: number
	Palmitic: number
	Stearic: number
	Ricinoleic: number
	Oleic: number
	Linoleic: number
	Linolenic: number
	Saturated?: number
}

interface OilStoreState {
	Oils: Oil[]
	headerOptions: {
		typeOfLye: string
		weightOfOilsValue: number
		weightOfOilsUnit: string
		water: {
			selected: number
			waterAsOfOils: number
			lyeConcentration: number
			WaterToLyeRatio: {
				water: number
				lye: number
			}
		}
		superFat: number
		fragrance: {
			value: number
			frWeight: string
		}
	}
	OilProperties: {
		Name: string
		Hardness: number
		Cleansing: number
		Condition: number
		Bubbly: number
		Creamy: number
		Iodine: number
		INS: number
		Lauric: number
		Myristic: number
		Palmitic: number
		Stearic: number
		Ricinoleic: number
		Oleic: number
		Linoleic: number
		Linolenic: number
	}
	RecipeTotal: {
		weightLye: number
		weightWater: number
		weightOils: number
		FragranceWeight: number
	}
	AddedOils: Oil[]
	soapProperties: SoapProperties
}

// export const useOilStore = defineStore<'oilStore', OilStoreState>('oilStore', {
export const useOilStore = defineStore('oilStore', {
	state: (): OilStoreState => ({
		Oils: OilsAPIJsonFile,
		headerOptions: {
			typeOfLye: 'NaOH',
			weightOfOilsValue: 0,
			weightOfOilsUnit: 'Grams',
			water: {
				// The selected option
				selected: 0,
				// Typical range for waterAsOfOils:
				//-  30–38% of oils (most calculators default to ~33%).
				waterAsOfOils: 32,
				// Typical range for lyeConcentration :
				//- 28% to 40%
				//-- Low concentration = more water (slower trace)
				//-- High concentration = less water (faster trace)
				lyeConcentration: 33,
				WaterToLyeRatio: {
					water: 2,
					lye: 1,
				},
			},
			superFat: 5,
			fragrance: {
				value: 31.25,
				frWeight: 'g/Kg',
			},
		},
		OilProperties: {
			Name: 'Oil Name',
			Hardness: 0,
			Cleansing: 0,
			Condition: 0,
			Bubbly: 0,
			Creamy: 0,
			Iodine: 0,
			INS: 0,
			Lauric: 0,
			Myristic: 0,
			Palmitic: 0,
			Stearic: 0,
			Ricinoleic: 0,
			Oleic: 0,
			Linoleic: 0,
			Linolenic: 0,
		},
		RecipeTotal: {
			weightLye: 0,
			weightWater: 0,
			weightOils: 0,
			FragranceWeight: 0,
		},
		AddedOils: [],
		soapProperties: {
			Hardness: 0,
			Cleansing: 0,
			Conditioning: 0,
			Bubbly: 0,
			Creamy: 0,
			Iodine: 0,
			INS: 0,
			Lauric: 0,
			Myristic: 0,
			Palmitic: 0,
			Stearic: 0,
			Ricinoleic: 0,
			Oleic: 0,
			Linoleic: 0,
			Linolenic: 0,
			Saturated: 0,
			MonoUnsaturated: 0,
			PolyUnsaturated: 0,
		},
	}),
	getters: {
		GetOil(): object {
			return this.Oils.filter((O: { Name: string }) => O.Name)
		},
		GetHeaderOptions(): typeof this.headerOptions {
			return this.headerOptions
		},
		GetSelectedOils(): object {
			return this.AddedOils
		},
		getTypeOfLye(): string {
			return this.headerOptions.typeOfLye
		},
		getRecipeTotal(): typeof this.RecipeTotal {
			return this.RecipeTotal
		},
		getSoapProperties(): SoapProperties {
			return this.soapProperties
		},
	},
	actions: {
		setTypeOfLye(value: string): void {
			if (value === 'NaOH' || 'KOH') {
				this.headerOptions.typeOfLye = value
				this.RecipeTotal.weightLye = 0
				// this.weightWater = 0;

				this.AddedOils.forEach((oi: Oil) => {
					if (this.headerOptions.typeOfLye === 'NaOH') {
						const NaOH: number = (oi.weight ?? 0) * oi.NaOH

						this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0))
					} else {
						this.RecipeTotal.weightLye += parseInt(((oi.weight ?? 0) * oi.KOH).toFixed(0))
					}
				})
			}
		},
		ClickedOil(selectedOil: Oil) {
			if (this.AddedOils.includes(selectedOil) === false) {
				// console.log(this.selectedOilArray);
				// console.log(selectedOil);
				selectedOil['weight'] = 0
				this.AddedOils.push(selectedOil)
				// console.log(this.AddedOils)
			}
		},
		showTheInfo(selectedOil: Oil): void {
			this.OilProperties = selectedOil
		},
		setWaterLyePercent(whichOption: number, valueTwo: number | object): void {
			// whichOption: must be on of three value and they are 0,1,2
			// ---------------------
			//- 0: waterPerOils
			// ---------------------
			//==== Definition:
			//----- Water is calculated as a percentage of total oils.
			//==== Formula: Water = Oil Weight × (Water % / 100)
			//==== Example:
			//----- Oil weight = 1000 g
			//----- Water% = 33%
			//----- Water = 1000 × 0.33 = 330 g
			// ---------------------
			//- 1: lyeConcentration
			// ---------------------
			//==== Definition:
			//----- Percentage of NaOH (lye) in the total lye solution.
			//==== Formula:
			//----- Lye Concentration = NaOH / (NaOH + Water)
			//----- Rearranged to find water:
			//------ Water = (NaOH / Lye Concentration) − NaOH
			//==== Example:
			//----- NaOH needed = 140 g
			//----- Target concentration = 33% (0.33)
			//----- Water = (140 / 0.33) − 140
			//----- Water = 424.24 − 140
			//----- Water = **284.24 g**
			// ---------------------
			//- 2: Water: Lye Ratio
			// ---------------------

			if (whichOption == 0) {
				this.headerOptions.water.waterAsOfOils = valueTwo as number
			} else if (whichOption == 1) {
				this.headerOptions.water.lyeConcentration = valueTwo as number
			} else {
				const getTheObject: { water: number; lye: number } = valueTwo as {
					water: number
					lye: number
				}
				if (getTheObject.water) {
					this.headerOptions.water.WaterToLyeRatio.water = getTheObject.water
				}
				if (getTheObject.lye) {
					this.headerOptions.water.WaterToLyeRatio.lye = getTheObject.lye
				}
			}

			// Update the selected option so subsequent recalcs use the right method
			this.headerOptions.water.selected = whichOption

			// Calculate water based on the selected method
			// 0: Water as % of Oils
			if (this.headerOptions.water.selected === 0) {
				this.RecipeTotal.weightWater =
					(this.RecipeTotal.weightOils / 100) * this.headerOptions.water.waterAsOfOils
			}
			// 1: Lye Concentration
			// Water = (TotalLye / (Concentration/100)) - TotalLye
			else if (this.headerOptions.water.selected === 1) {
				const concentration = this.headerOptions.water.lyeConcentration / 100
				if (concentration > 0 && concentration < 1) {
					this.RecipeTotal.weightWater =
						this.RecipeTotal.weightLye / concentration - this.RecipeTotal.weightLye
				}
			}
			// 2: Water:Lye Ratio
			// Water = LyeWeight * (WaterRatio / LyeRatio)
			else if (this.headerOptions.water.selected === 2) {
				const ratio = this.headerOptions.water.WaterToLyeRatio
				if (ratio.lye > 0) {
					this.RecipeTotal.weightWater = this.RecipeTotal.weightLye * (ratio.water / ratio.lye)
				}
			}

			// Round to nearest integer for consistency
			this.RecipeTotal.weightWater = Math.round(this.RecipeTotal.weightWater)
		},
		calcLye(): void {
			this.RecipeTotal.weightOils = 0
			this.RecipeTotal.weightLye = 0
			// this.RecipeTotal.weightWater = 0;
			this.AddedOils.forEach((oi: Oil) => {
				const weight = oi.weight ?? 0
				if (this.headerOptions.typeOfLye === 'NaOH') {
					const NaOH = weight * oi.NaOH
					this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0))
				} else {
					this.RecipeTotal.weightLye += parseInt((weight * oi.KOH).toFixed(0))
				}
				this.RecipeTotal.weightOils += parseInt(weight.toFixed(0))
			})
			// this.RecipeTotal.weightWater += parseInt((this.RecipeTotal.weightLye * 3).toFixed(0));

			// Apply SuperFat Discount
			if (this.headerOptions.superFat > 0) {
				this.RecipeTotal.weightLye =
					((100 - this.headerOptions.superFat) / 100) * this.RecipeTotal.weightLye
			}

			// Recalculate water based on the currently selected method
			// We pass the current value of the selected method to trigger the calculation logic
			const selected = this.headerOptions.water.selected
			let value: number | object = 0

			if (selected === 0) value = this.headerOptions.water.waterAsOfOils
			else if (selected === 1) value = this.headerOptions.water.lyeConcentration
			else if (selected === 2) value = this.headerOptions.water.WaterToLyeRatio

			this.setWaterLyePercent(selected, value)
		},
		RemoveOils(OilToRemove: Oil): void {
			if (this.AddedOils.includes(OilToRemove) === true) {
				this.AddedOils = this.AddedOils.filter((o: Oil) => {
					return o != OilToRemove
				})
				this.calcLye()
			}
		},
		getProperties(): void {
			this.soapProperties.Hardness = 0
			this.soapProperties.Cleansing = 0
			this.soapProperties.Conditioning = 0
			this.soapProperties.Bubbly = 0
			this.soapProperties.Creamy = 0
			this.soapProperties.Iodine = 0
			this.soapProperties.INS = 0
			this.soapProperties.Lauric = 0
			this.soapProperties.Myristic = 0
			this.soapProperties.Palmitic = 0
			this.soapProperties.Stearic = 0
			this.soapProperties.Ricinoleic = 0
			this.soapProperties.Oleic = 0
			this.soapProperties.Linoleic = 0
			this.soapProperties.Linolenic = 0
			this.soapProperties.Saturated = 0
			this.soapProperties.MonoUnsaturated = 0
			this.soapProperties.PolyUnsaturated = 0
			this.AddedOils.forEach((ele: Oil) => {
				const weight = ele.weight ?? 0
				this.soapProperties.Hardness += Math.round(
					(ele.Hardness * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Cleansing += Math.round(
					(ele.Cleansing * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Conditioning += Math.round(
					(ele.Condition * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Bubbly += Math.round(
					(ele.Bubbly * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Creamy += Math.round(
					(ele.Creamy * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Iodine += Math.round(
					(ele.Iodine * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.INS += Math.round(
					(ele.INS * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Lauric += Math.round(
					(ele.Lauric * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Myristic += Math.round(
					(ele.Myristic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Palmitic += Math.round(
					(ele.Palmitic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Stearic += Math.round(
					(ele.Stearic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Ricinoleic += Math.round(
					(ele.Ricinoleic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Oleic += Math.round(
					(ele.Oleic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Linoleic += Math.round(
					(ele.Linoleic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Linolenic += Math.round(
					(ele.Linolenic * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				this.soapProperties.Saturated += Math.round(
					((ele.Saturated ?? 0) * ((weight * 100) / this.RecipeTotal.weightOils)) / 100,
				)
				// this.soapProperties.MonoUnsaturated += Math.round(ele.Id * (weight * 100 / this.RecipeTotal.weightOils) /100);
				// this.soap_properties.PolyUnsaturated += Math.round(ele.Id * (weight * 100 / this.RecipeTotal.weightOils) /100);
			})
		},
		AddedOilsWeight(OilName: string, OilWeight: number): void {
			this.RecipeTotal.weightLye = 0
			// this.RecipeTotal.weightWater = 0;
			this.RecipeTotal.weightOils = 0
			this.RecipeTotal.FragranceWeight = 0

			this.AddedOils.forEach((oi: Oil): void => {
				if (OilName === oi.Name) {
					oi.weight = OilWeight
				}
				if (this.headerOptions.typeOfLye === 'NaOH') {
					const NaOH: number = (oi.weight ?? 0) * oi.NaOH

					this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0))
				} else {
					this.RecipeTotal.weightLye += parseInt(((oi.weight ?? 0) * oi.KOH).toFixed(0))
				}
				this.RecipeTotal.weightOils += parseInt((oi.weight ?? 0).toFixed(0))
			})
			// this.RecipeTotal.weightWater += parseInt((this.RecipeTotal.weightLye * 3).toFixed(0));
			this.RecipeTotal.FragranceWeight = Math.round(
				(((this.RecipeTotal.weightOils / 100) * this.headerOptions.fragrance.value) / 1000) * 100,
			)
			// Recalculate water based on the currently selected method, similar to calcLye
			const selected = this.headerOptions.water.selected
			let value: number | object = 0

			if (selected === 0) value = this.headerOptions.water.waterAsOfOils
			else if (selected === 1) value = this.headerOptions.water.lyeConcentration
			else if (selected === 2) value = this.headerOptions.water.WaterToLyeRatio

			this.setWaterLyePercent(selected, value)
			this.getProperties()
			this.ChangeSuperFat(this.headerOptions.superFat)
		},
		ChangeFragrance(value: number): void {
			this.headerOptions.fragrance.value = value
			this.RecipeTotal.FragranceWeight = Math.round(
				(((this.RecipeTotal.weightOils / 100) * this.headerOptions.fragrance.value) / 1000) * 100,
			)
		},
		ChangeSuperFat(value: number): void {
			this.headerOptions.superFat = value
			this.calcLye()
		},
	},
})

// What this does?
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useOilStore, import.meta.hot))
}
