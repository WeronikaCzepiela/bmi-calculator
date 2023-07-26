import './App.scss'
import { Header } from './components/Header/Header'
import { Middle } from './components/Middle/Middle'
import { Accounts } from './components/Accounts/Accounts'
import { useState } from 'react'
import {
  addNewMeasure,
  changeMeasure,
  getDate,
  getMeasurementsFromLocalStorage,
  isMeasureFromTheDate,
  saveMeasurementsToLocalStorage,
} from './App.helpers'
import './utils/i18.config'

export const App = () => {
  const [measurementsHistory, setMeasurementsHistory] = useState(getMeasurementsFromLocalStorage())

  const setNewMeasurementsHistory = (bmi) => {
    if (!bmi) return

    const date = getDate()
    let newMeasurementsHistory

    if (!isMeasureFromTheDate(measurementsHistory, date)) {
      newMeasurementsHistory = addNewMeasure(measurementsHistory, bmi, date)
    } else {
      newMeasurementsHistory = changeMeasure(measurementsHistory, bmi, date)
    }

    setMeasurementsHistory(newMeasurementsHistory)
    saveMeasurementsToLocalStorage(newMeasurementsHistory)
  }

  return (
    <div className={'App'}>
      <Header />
      <Middle
        setNewMeasurementsHistory={setNewMeasurementsHistory}
        measurementsHistory={measurementsHistory}
      />
      <Accounts />
    </div>
  )
}

export default App
