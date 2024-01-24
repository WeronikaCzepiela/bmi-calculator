import moment from 'moment'

export const isMeasureFromTheDate = (measurementsHistory, date) =>
  measurementsHistory.find((element) => element.date === date)

export const getDate = () => moment().format('DD.MM.YYYY')

export const addNewMeasure = (measurementsHistory, bmi, date) => [
  ...measurementsHistory,
  {
    date: date,
    value: bmi.toString(),
  },
]

export const changeMeasure = (measurementsHistory, bmi, date) =>
  measurementsHistory.map((element) => {
    if (element.date === date) return { ...element, value: bmi.toString() }

    return element
  })

export const saveMeasurementsToLocalStorage = (newMeasurementsHistory) => {
  window.localStorage.setItem('BMI-list', JSON.stringify(newMeasurementsHistory))
}

export const getMeasurementsFromLocalStorage = () => {
  const historyMeasurements = JSON.parse(window.localStorage.getItem('BMI-list'))
  if (historyMeasurements) return historyMeasurements

  return []
}
