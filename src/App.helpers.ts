import moment from 'moment'

export type MeasurementsHistoryType = Array<{ date: string; value: string }>
export type SetMeasureHistoryTypes = (measurementsHistory: MeasurementsHistoryType) => void

export const isMeasureFromTheDate = (measurementsHistory: MeasurementsHistoryType, date: string) =>
  measurementsHistory.find((element) => element.date === date)

export const getDate = () => moment().format('DD.MM.YYYY')

export const addNewMeasure = (
  measurementsHistory: MeasurementsHistoryType,
  bmi: number,
  date: string,
) => [
  ...measurementsHistory,
  {
    date: date,
    value: bmi.toString(),
  },
]

export const changeMeasure = (
  measurementsHistory: MeasurementsHistoryType,
  bmi: number,
  date: string,
) =>
  measurementsHistory.map((element) => {
    if (element.date === date) return { ...element, value: bmi.toString() }

    return element
  })

export const saveMeasurementsToLocalStorage = (newMeasurementsHistory: MeasurementsHistoryType) => {
  window.localStorage.setItem('BMI-list', JSON.stringify(newMeasurementsHistory))
}

export const getMeasurementsFromLocalStorage = () => {
  const historyMeasurements = JSON.parse(window.localStorage.getItem('BMI-list'))
  if (historyMeasurements) return historyMeasurements

  return []
}
