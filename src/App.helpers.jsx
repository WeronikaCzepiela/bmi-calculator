import moment from 'moment'

export const isMeasureFromTheDate = (measurementsHistory, date) => {
  return measurementsHistory.find((element) => element.date === date)
}

export const getDate = () => {
  return moment().format('DD.MM.YYYY')
}
export const addNewMeasure = (measurementsHistory, bmi, date) => {
  return [
    ...measurementsHistory,
    {
      date: date,
      value: bmi,
    },
  ]
}

export const changeMeasure = (measurementsHistory, bmi, date) => {
  return measurementsHistory.map((element) => {
    if (element.date === date) return { ...element, value: bmi }
    else return element
  })
}

export const helpersStorageBmi = (newMeasurementsHistory) => {
  window.localStorage.setItem('BMI-list', JSON.stringify(newMeasurementsHistory))
}
