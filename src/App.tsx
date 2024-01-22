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
  MeasurementsHistoryType,
  saveMeasurementsToLocalStorage,
} from './App.helpers'
import './utils/i18.config'
import { Route, Routes } from 'react-router-dom'
import { BmiDescription } from './components/BmiDescription/BmiDescription'
export const App = () => {
  const [measurementsHistory, setMeasurementsHistory] = useState(getMeasurementsFromLocalStorage())

  const setNewMeasurementsHistory = (bmi: number) => {
    if (!bmi) return

    const date = getDate()
    let newMeasurementsHistory: MeasurementsHistoryType

    if (!isMeasureFromTheDate(measurementsHistory, date)) {
      newMeasurementsHistory = addNewMeasure(measurementsHistory, bmi, date)
    } else {
      newMeasurementsHistory = changeMeasure(measurementsHistory, bmi, date)
    }
    setMeasurementsHistory(newMeasurementsHistory)
    saveMeasurementsToLocalStorage(newMeasurementsHistory)
  }

  console.log(measurementsHistory)
  return (
    <div className={'App'}>
      <Header />
      <Routes>
        <Route
          path={'/bmi_calculator'}
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
