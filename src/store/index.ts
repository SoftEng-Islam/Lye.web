import { defineStore } from 'pinia'
import OilsAPIJsonFile from '../API/oilsArray2'

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

interface Oil {
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
			selcted: number
			waterAsOfOils: number
			lyeConcentration: number
			WaterToLyeRatio: string
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

export const useOilStore = defineStore<'taskStore', OilStoreState>('taskStore', {
	state: () => ({
		Oils: OilsAPIJsonFile,
		headerOptions: {
			typeOfLye: 'NaOH',
			weightOfOilsValue: 0,
			weightOfOilsUnit: 'Grams',
			water: {
				selcted: 0,
				waterAsOfOils: 38,
				lyeConcentration: 70,
				WaterToLyeRatio: '2:1',
			},
			superFat: 5,
			fragrance: {
				value: 31.25,
				frWeight: 'g/Kg',
			},
		},
		OilProperties: {
			Name: 'Oil Properties',
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
		ClickedOil(selectedOil: Oil): void {
			if (this.AddedOils.includes(selectedOil) === false) {
				// console.log(this.selectedOilArray);
				// console.log(selectedOil);
				selectedOil['weight'] = 0
				this.AddedOils.push(selectedOil)
				console.log(this.AddedOils)
			}
		},
		showTheInfo(selectedOil: Oil): void {
			this.OilProperties = selectedOil
		},
		WaterAsOfOils(valueOne: number, valueTwo: number | string): void {
			if (valueOne == 0) {
				this.headerOptions.water.waterAsOfOils = valueTwo as number
			} else if (valueOne == 1) {
				this.headerOptions.water.lyeConcentration = valueTwo as number
			} else {
				this.headerOptions.water.WaterToLyeRatio = valueTwo as string
			}
			console.log('weightWater', this.RecipeTotal.weightWater)
			console.log('waterAsOfOils', this.headerOptions.water.waterAsOfOils)
			console.log('weightOils', this.RecipeTotal.weightOils)
			console.log('weightWater', this.RecipeTotal.weightWater)

			this.RecipeTotal.weightWater =
				(this.RecipeTotal.weightOils / 100) * this.headerOptions.water.waterAsOfOils
		},
		calcLye() {
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
			this.WaterAsOfOils(0, this.headerOptions.water.waterAsOfOils)
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
			this.WaterAsOfOils(0, this.headerOptions.water.waterAsOfOils)
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
			this.calcLye()
			this.headerOptions.superFat = value
			this.RecipeTotal.weightLye =
				((100 - this.headerOptions.superFat) / 100) * this.RecipeTotal.weightLye
		},
	},
})
