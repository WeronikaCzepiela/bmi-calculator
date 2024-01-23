import { MeasurementsHistoryType, SetMeasureHistoryTypes } from '../../App.helpers'

export type BmiCalculatorTypes = {
  setNewMeasurementsHistory: (bmi: number) => void
  measurementsHistory: MeasurementsHistoryType
}
