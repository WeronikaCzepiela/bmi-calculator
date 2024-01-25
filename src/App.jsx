import './App.scss'
import * as React from 'react'
import { useState } from 'react'
import { Header } from './components/Header/Header'
import { BmiCalculator } from './components/BmiCalculator/BmiCalculator'
import { Accounts } from './components/Accounts/Accounts'
import {
  addNewMeasure,
  changeMeasure,
  getDate,
  getMeasurementsFromLocalStorage,
  isMeasureFromTheDate,
  saveMeasurementsToLocalStorage,
} from './App.helpers'
import './utils/i18.config.js'
import { Route, Routes } from 'react-router-dom'
import { BmiDescription } from './components/BmiDescription/BmiDescription.jsx'

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
      <Routes>
        <Route
          path={'/bmi-calculator'}
          element={
            <BmiCalculator
              setNewMeasurementsHistory={setNewMeasurementsHistory}
              measurementsHistory={measurementsHistory}
            />
          }
        />
        <Route path={'/what-is-bmi'} element={<BmiDescription />} />
      </Routes>
      <Accounts />
    </div>
  )
}

export default App
