import './App.scss'
import { Header } from './components/Header/Header'
import { Middle } from './components/Middle/Middle'
import { Accounts } from './components/Accounts/Accounts'
import { useState } from 'react'
import {
  addNewMeasure,
  changeMeasure,
  getDate,
  helpersStorageBmi,
  isMeasureFromTheDate,
} from './App.helpers'

export const App = () => {
  const [measurementsHistory, setMeasurementsHistory] = useState([
    JSON.parse(window.localStorage.getItem('BMI-list')),
  ])

  const setNewMeasurementsHistory = (bmi) => {
    if (!bmi) return
    const date = getDate()
    let newMeasurementsHistory
    if (!isMeasureFromTheDate(measurementsHistory, date)) {
      newMeasurementsHistory = addNewMeasure(measurementsHistory, bmi, date)
    } else newMeasurementsHistory = changeMeasure(measurementsHistory, bmi, date)
    setMeasurementsHistory(newMeasurementsHistory)
    helpersStorageBmi(newMeasurementsHistory)
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
